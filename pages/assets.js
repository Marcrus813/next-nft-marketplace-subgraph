import React, { useEffect, useState } from "react";

import { Field, Label, Input, Description } from "@headlessui/react";
import GeneralCombobox from "@/components/PageComponents/Combobox/GeneralCombobox";

import {
    useAccount,
    useReadContracts,
    useWriteContract,
    useWaitForTransactionReceipt,
} from "wagmi";

import { isAddress, formatUnits, zeroAddress } from "viem";
import { getTokenDecimals } from "@/utils/web3/addressUtils";

import { contractAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { svgNftArtifact } from "@/assets/artifacts/chain-11155111/svgNft-artifact";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import clsx from "clsx";
import { supportedTokens } from "@/config/marketplace/supportedTokens";

const Assets = () => {
    const { address: account, chainId } = useAccount();

    const marketplaceAddress = contractAddresses["NftMarketplaceModule#NftMarketplace"];

    const getProceedsInfo = async (supplier, token) => {
        const { data: proceeds } = useReadContracts({
            contracts: [
                {
                    address: marketplaceAddress,
                    abi: marketplaceArtifact.abi,
                    functionName: "getSupplierProceeds",
                    args: [supplier, token],
                },
            ],
            allowFailure: true,
        });

        return proceeds[0];
    };

    const checkIsApproved = async (tokenAddress, tokenId) => {
        const { data: isApproved } = useReadContracts({
            contracts: [
                {
                    address: tokenAddress,
                    abi: svgNftArtifact.abi,
                    functionName: "getApproved",
                    args: [tokenId],
                },
            ],
        });

        return isApproved[0];
    };

    const { data: approveNftHash, writeContractAsync: writeApproveNft } = useWriteContract();
    const { data: listNftHash, writeContractAsync: writeListNft } = useWriteContract();

    const approveNftForMarketplace = async (tokenAddress, spender, tokenId) => {
        await writeApproveNft({
            address: tokenAddress,
            abi: svgNftArtifact.abi,
            functionName: "approve",
            args: [spender, tokenId],
        });
    };

    const listNftOnMarket = async (
        tokenAddress,
        tokenId,
        preferredPayment,
        price,
        strictPayment,
    ) => {
        await writeListNft({
            address: marketplaceAddress,
            abi: marketplaceArtifact.abi,
            functionName: "listNft",
            args: [tokenAddress, tokenId, preferredPayment, price, strictPayment],
        });
    };

    const [addressChecked, setAddressChecked] = useState(false);
    const [nftToList, setNftToList] = useState("");

    const handleAddressChange = (e) => {
        const value = e.target.value;
        const isValidAddress = isAddress(value);
        setAddressChecked(isValidAddress);
        if (isValidAddress) {
            setNftToList(value);
        }
    };

    const [tokenIdChecked, setTokenIdChecked] = useState(false);
    const [nftIdToList, setNftIdToList] = useState(0);

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
        setNftIdToList(Number(input));
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
    const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);
    const strictPaymentOptions = [
        { id: false, name: "No" },
        { id: true, name: "Yes" },
    ];
    const [tokenDecimal, setTokenDecimal] = useState(getTokenDecimals(zeroAddress).decimals);
    useEffect(() => {
        setTokenDecimal(getTokenDecimals(selectedPayment.id).decimals);
    }, [selectedPayment]);
    const [strictPayment, setStrictPayment] = useState(false);
    const [price, setPrice] = useState(0);

    const [isPriceValid, setIsPriceValid] = useState(false);
    const handlePriceChange = (e) => {
        const input = e.target.value;

        const isValid = /^\d+\.?\d{0,2}$/.test(input) && input !== "0" && input !== "";

        if (isValid) {
            setIsPriceValid(input);
            setPrice(Number(input));
        }
    };

    return (
        <div className={"flex flex-row"}>
            <div className={"list-listings-container"}>
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
                                )}
                                type={"text"}
                                onChange={handleAddressChange}
                            ></Input>
                            {!addressChecked && (
                                <Description className={"text-sm/6 text-white/50"}>
                                    Please enter a valid address!
                                </Description>
                            )}
                        </Field>
                        <Field className={"p-1 m-1"}>
                            <Label className={"text-sm/6 font-medium text-white"}>Token ID</Label>
                            <Input
                                className={clsx(
                                    "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                    "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
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
                                updateSelected={setSelectedPayment}
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
                            <Label className="text-sm/6 font-medium text-white">Price</Label>
                            <Input
                                className={clsx(
                                    "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                    "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
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
            </div>
            <div className={"withdraw-container"}>
                <div className={"assets-info-container"}></div>
            </div>
        </div>
    );
};
export default Assets;
