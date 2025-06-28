import React, { useEffect, useState } from "react";

import { Field, Label, Input, Description, Button } from "@headlessui/react";
import GeneralCombobox from "@/components/PageComponents/Combobox/GeneralCombobox";

import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { readContract } from "@wagmi/core";
import { wagmiConfig } from "@/config/web3KitConfig";

import { isAddress, parseUnits, zeroAddress } from "viem";
import { compareAddressIgnoreCase, getTokenDecimals } from "@/utils/web3/addressUtils";

import { contractAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { svgNftArtifact } from "@/assets/artifacts/chain-11155111/svgNft-artifact";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import clsx from "clsx";
import { supportedTokens } from "@/config/marketplace/supportedTokens";
import toast from "react-hot-toast";

const Assets = () => {
    const { address: account, chainId, isConnected } = useAccount();

    const marketplaceAddress = contractAddresses["NftMarketplaceModule#NftMarketplace"];

    /* Listing */

    const checkIsApproved = async (tokenAddress, tokenId) => {
        const queryResult = await readContract(wagmiConfig, {
            abi: svgNftArtifact.abi,
            address: tokenAddress,
            functionName: "getApproved",
            args: [tokenId],
            chainId: chainId,
        });

        return compareAddressIgnoreCase(queryResult, marketplaceAddress);
    };

    const { data: approveNftHash, writeContractAsync: writeApproveNft } = useWriteContract();
    const { isSuccess: approvalGood } = useWaitForTransactionReceipt({ hash: approveNftHash });
    const {
        data: listNftHash,
        writeContractAsync: writeListNft,
        isPending: isPendingListing,
    } = useWriteContract();
    const { isSuccess: listGood } = useWaitForTransactionReceipt({ hash: listNftHash });

    const [addressChecked, setAddressChecked] = useState(false);
    const [validatingAddress, setValidatingAddress] = useState(false);
    const [nftToList, setNftToList] = useState("");

    const checkAddressIsErc721 = async (address) => {
        setValidatingAddress(true);

        try {
            const result = await readContract(wagmiConfig, {
                abi: svgNftArtifact.abi,
                address: address,
                functionName: "supportsInterface",
                args: ["0x80ac58cd"],
                chainId: chainId,
            });

            return Boolean(result);
        } catch (e) {
            return false;
        }
    };
    const handleAddressChange = async (e) => {
        const value = e.target.value;
        const emptyCheck = value === "";
        const isValidAddress = isAddress(value) && !emptyCheck;

        if (isValidAddress) {
            const isErc721 = await checkAddressIsErc721(value);
            setValidatingAddress(false);
            if (isErc721) {
                setAddressChecked(true);
                setNftToList(value);
            } else {
                setAddressChecked(false);
            }
        } else {
            setAddressChecked(false);
        }
    };

    const [tokenIdChecked, setTokenIdChecked] = useState(false);
    const [nftId, setNftId] = useState(0);
    const handleIdChange = (e) => {
        let input = e.target.value;

        if (input === "") {
            setTokenIdChecked(false);
            return;
        }

        // Only digits
        if (!/^\d*$/.test(input)) {
            setTokenIdChecked(false);
            return;
        }

        if (input === "0") {
            setTokenIdChecked(false);
            return;
        }

        setTokenIdChecked(true);
        setNftId(Number(input));
    };

    const paymentOptions = [
        { id: supportedTokens[0], name: "ETH" },
        { id: supportedTokens[1], name: "wETH" },
        { id: supportedTokens[2], name: "USDC" },
        { id: supportedTokens[3], name: "DAI" },
        { id: supportedTokens[4], name: "LINK" },
        { id: supportedTokens[5], name: "UNI" },
        { id: supportedTokens[6], name: "wBTC" },
    ];
    const [preferredPayment, setPreferredPayment] = useState(paymentOptions[0]);
    const strictPaymentOptions = [
        { id: false, name: "No" },
        { id: true, name: "Yes" },
    ];
    const [tokenDecimal, setTokenDecimal] = useState(getTokenDecimals(zeroAddress).decimals);
    useEffect(() => {
        setTokenDecimal(getTokenDecimals(preferredPayment.id).decimals);
    }, [preferredPayment]);

    const [strictPayment, setStrictPayment] = useState(false);

    const [price, setPrice] = useState("0");
    const [isPriceValid, setIsPriceValid] = useState(false);
    const handlePriceChange = (e) => {
        const input = e.target.value;

        const regexCheck = /^(?:0|[1-9]\d*)(?:\.\d{1,2})?$/.test(input);
        const zeroCheck = input !== "0";
        const emptyCheck = input !== "";

        const isValid = regexCheck && zeroCheck && emptyCheck;

        if (isValid) {
            setIsPriceValid(true);
            setPrice(input);
        } else {
            setIsPriceValid(false);
        }
    };

    const handleSubmitList = async (e) => {
        e.preventDefault();

        setAddressChecked(isAddress(nftToList) && nftToList !== "");
        setTokenIdChecked(nftId > 0);
        setIsPriceValid(price > 0);

        const infoCheck = addressChecked && tokenIdChecked && isPriceValid;
        if (!infoCheck) return;

        let isApproved = await checkIsApproved(nftToList, nftId);
        if (!isApproved) {
            const { hash: approveHash } = await writeApproveNft({
                address: nftToList,
                abi: svgNftArtifact.abi,
                functionName: "approve",
                args: [marketplaceAddress, nftId],
            });
            if (approvalGood) {
                isApproved = true;
            }
        }

        if (isApproved) {
            const priceUint = parseUnits(price, tokenDecimal);

            const txnPromise = writeListNft({
                address: marketplaceAddress,
                abi: marketplaceArtifact.abi,
                functionName: "listNft",
                args: [nftToList, nftId, preferredPayment.id, priceUint, strictPayment],
            })
                .then((txnHash) => {
                    return txnHash;
                })
                .catch((err) => {
                    throw err;
                });
            toast.promise(
                txnPromise,
                {
                    loading: "List NFT pending...",
                    success: (txnHash) => (
                        <div className="flex flex-col">
                            <span className="font-semibold">Transaction Success!</span>
                            <a
                                href={`https://etherscan.io/tx/${txnHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs underline"
                            >
                                View on Etherscan
                            </a>
                        </div>
                    ),
                    error: (err) => (
                        <div className="flex flex-col">
                            <span className="font-semibold">Transaction Failed!</span>
                            <span className="text-xs">
                                {err?.shortMessage || err?.message || "Unknown error"}
                            </span>
                        </div>
                    ),
                },
                { duration: 6000 },
            );
        }
    };

    /* Withdraw */

    const getProceedsInfo = async (supplier, token) => {
        return await readContract(wagmiConfig, {
            abi: marketplaceArtifact.abi,
            address: marketplaceAddress,
            functionName: "getSupplierProceeds",
            args: [supplier, token],
            chainId: chainId,
        });
    };

    const [ethProceeds, setEthProceeds] = useState(0);
    const [wEthProceeds, setWethProceeds] = useState(0);
    const [usdcProceeds, setUsdcProceeds] = useState(0);
    const [daiProceeds, setDaiProceeds] = useState(0);
    const [linkProceeds, setLinkProceeds] = useState(0);
    const [uniProceeds, setUniProceeds] = useState(0);
    const [wBtcProceeds, setWbtcProceeds] = useState(0);

    const [allowWithdraw, setAllowWithdraw] = useState(false);

    const updateProceeds = async (account) => {
        const ethProceeds = await getProceedsInfo(account, zeroAddress);
        const wEthProceeds = await getProceedsInfo(account, supportedTokens[1]);
        const usdcProceeds = await getProceedsInfo(account, supportedTokens[2]);
        const daiProceeds = await getProceedsInfo(account, supportedTokens[3]);
        const linkProceeds = await getProceedsInfo(account, supportedTokens[4]);
        const uniProceeds = await getProceedsInfo(account, supportedTokens[5]);
        const wBtcProceeds = await getProceedsInfo(account, supportedTokens[6]);

        setEthProceeds(ethProceeds);
        setWethProceeds(wEthProceeds);
        setUsdcProceeds(usdcProceeds);
        setDaiProceeds(daiProceeds);
        setLinkProceeds(linkProceeds);
        setUniProceeds(uniProceeds);
        setWbtcProceeds(wBtcProceeds);
    };

    useEffect(() => {
        if (!account === undefined) {
            updateProceeds(account);
            const totalAmount =
                Number(ethProceeds) +
                Number(wEthProceeds) +
                Number(usdcProceeds) +
                Number(daiProceeds) +
                Number(linkProceeds) +
                Number(uniProceeds) +
                Number(wBtcProceeds);
            if (totalAmount > 0) {
                setAllowWithdraw(true);
            }
        }
    }, [account]);

    const { data: withdrawHash, writeContractAsync: withdrawProceeds } = useWriteContract();

    const handleWithdraw = async (e) => {
        e.preventDefault();

        const txnPromise = withdrawProceeds({
            address: marketplaceAddress,
            abi: marketplaceArtifact.abi,
            functionName: "withdrawProceeds",
        })
            .then((txnHash) => {
                return txnHash;
            })
            .catch((err) => {
                throw err;
            });
        toast.promise(
            txnPromise,
            {
                loading: "Withdraw pending...",
                success: (txnHash) => (
                    <div className="flex flex-col">
                        <span className="font-semibold">Transaction Success!</span>
                        <a
                            href={`https://etherscan.io/tx/${txnHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs underline"
                        >
                            View on Etherscan
                        </a>
                    </div>
                ),
                error: (err) => (
                    <div className="flex flex-col">
                        <span className="font-semibold">Transaction Failed!</span>
                        <span className="text-xs">
                            {err?.shortMessage || err?.message || "Unknown error"}
                        </span>
                    </div>
                ),
            },
            { duration: 6000 },
        );
    };

    return (
        <div className={"flex flex-row"}>
            {isConnected ? (
                <>
                    <div className={"list-listings-container"}>
                        <form onSubmit={handleSubmitList}>
                            <div className={"list-listing-info-container"}>
                                <div className={"list-listing-info-item"}>
                                    <Field className={"p-1 m-1"}>
                                        <Label className={"text-sm/6 font-medium text-white"}>
                                            Token Address
                                        </Label>
                                        <Input
                                            className={clsx(
                                                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                                                !addressChecked &&
                                                    "border border-red-500 transition-all duration-300",
                                            )}
                                            type={"text"}
                                            onChange={handleAddressChange}
                                        ></Input>
                                        {validatingAddress ? (
                                            <Description className={"text-sm/6 text-white/50"}>
                                                Validating address...
                                            </Description>
                                        ) : (
                                            !addressChecked && (
                                                <Description className={"text-sm/6 text-white/50"}>
                                                    Please enter valid NFT address!
                                                </Description>
                                            )
                                        )}
                                    </Field>
                                    <Field className={"p-1 m-1"}>
                                        <Label className={"text-sm/6 font-medium text-white"}>
                                            Token ID
                                        </Label>
                                        <Input
                                            className={clsx(
                                                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                                                !tokenIdChecked &&
                                                    "border border-red-500 transition-all duration-300",
                                            )}
                                            type={"number"}
                                            onChange={handleIdChange}
                                        ></Input>
                                        {!tokenIdChecked && (
                                            <Description className={"text-sm/6 text-white/50"}>
                                                Please enter a valid ID!
                                            </Description>
                                        )}
                                    </Field>
                                </div>
                                <div className={"list-listing-info-item"}>
                                    <Field className={"p-1 m-1 max-w-50"}>
                                        <Label className="text-sm/6 font-medium text-white">
                                            Preferred payment
                                        </Label>
                                        <GeneralCombobox
                                            options={paymentOptions}
                                            optionsZ={"z-1"}
                                            initialValue={paymentOptions[0]}
                                            updateSelected={setPreferredPayment}
                                        />
                                    </Field>
                                    <Field className={"p-1 m-1 max-w-50"}>
                                        <Label className="text-sm/6 font-medium text-white">
                                            Strict payment
                                        </Label>
                                        <GeneralCombobox
                                            options={strictPaymentOptions}
                                            optionsZ={"z-1"}
                                            initialValue={strictPaymentOptions[0]}
                                            updateSelected={setStrictPayment}
                                        />
                                    </Field>
                                </div>
                                <div className={"list-listing-info-item"}>
                                    <Field className={"p-1 m-1 max-w-50"}>
                                        <Label className="text-sm/6 font-medium text-white">
                                            Price
                                        </Label>
                                        <Input
                                            className={clsx(
                                                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                                                !isPriceValid &&
                                                    "border border-red-500 transition-all duration-300",
                                            )}
                                            placeholder={"0.01"}
                                            inputMode={"decimal"}
                                            type={"text"}
                                            onChange={handlePriceChange}
                                        />
                                        {!isPriceValid && (
                                            <Description className={"text-sm/6 text-white/50"}>
                                                Please enter a valid price!
                                            </Description>
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className={"justify-center items-center p-1 m-1 max-w-50"}>
                                <Button
                                    className={"listing-action-list-btn"}
                                    type={"submit"}
                                    disabled={isPendingListing}
                                >
                                    List
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className={"asset-withdraw-container"}>
                        <div className={"assets-info-container"}>
                            <label className={"text-3xl"}>Proceeds</label>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        ETH
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {ethProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        wETH
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {wEthProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        USDC
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {usdcProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        DAI
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {daiProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        LINK
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {linkProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        UNI
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {uniProceeds}
                                    </Label>
                                </Field>
                            </div>
                            <div className={"assets-proceeds-info-item"}>
                                <Field className={"p-1 m-1"}>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        wBTC
                                    </Label>
                                    <Label className={"p-1 m-1 text-xl/6 font-medium text-white"}>
                                        {wBtcProceeds}
                                    </Label>
                                </Field>
                            </div>

                            <Button
                                className={"withdraw-action-withdraw-btn"}
                                disabled={allowWithdraw}
                            >
                                Withdraw
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div>Wallet not connected</div>
            )}
        </div>
    );
};
export default Assets;
