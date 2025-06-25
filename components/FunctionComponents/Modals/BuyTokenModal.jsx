import React, { useState, useEffect } from "react";

import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

import { supportedTokens } from "@/config/marketplace/supportedTokens";

import { useReadContracts, useWriteContract } from "wagmi";

import { getTokenDecimals, truncateStr } from "@/utils/web3/addressUtils";
import { formatPrice } from "@/utils/web3/priceUtils";

import PaymentComboBox from "@/components/PageComponents/Combobox/PaymentComboBox";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";
import { getConvertedPrice } from "@/utils/web3/priceUtils";

import { contractAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import { zeroAddress } from "viem";

import toast from "react-hot-toast";
import { erc20Artifact } from "@/assets/artifacts/chain-11155111/erc20-artifact";

const BuyTokenModal = ({
    isVisible,
    onClose,
    tokenName,
    tokenAddress,
    tokenId,
    seller,
    preferredPayment,
    price,
    strictPayment,
    connectedAccount,
}) => {
    const marketplaceAddress = contractAddresses["NftMarketplaceModule#NftMarketplace"];

    let addressSymbolMap = new Map();
    addressSymbolMap.set(supportedTokens[0], "ETH");
    addressSymbolMap.set(supportedTokens[1], "wETH");
    addressSymbolMap.set(supportedTokens[2], "USDC");
    addressSymbolMap.set(supportedTokens[3], "DAI");
    addressSymbolMap.set(supportedTokens[4], "LINK");
    addressSymbolMap.set(supportedTokens[5], "UNI");
    addressSymbolMap.set(supportedTokens[6], "wBTC");

    const [selectedPayment, setSelectedPayment] = useState(
        "0x0000000000000000000000000000000000000000",
    );
    const [paymentDecimal, setPaymentDecimal] = useState(
        getTokenDecimals(preferredPayment).decimals,
    );
    const [supplyingPrice, setSupplyingPrice] = useState(price);
    const isPaymentMatch = compareAddressIgnoreCase(selectedPayment, preferredPayment);

    useEffect(() => {
        setPaymentDecimal(getTokenDecimals(selectedPayment));
        let isMounted = true;

        const fetchConvertedPrice = async () => {
            try {
                const convertedPrice = await getConvertedPrice(
                    preferredPayment,
                    price,
                    selectedPayment,
                );
                if (isMounted) {
                    setSupplyingPrice(convertedPrice);
                }
            } catch (error) {
                console.error("Failed to get converted price:", error);
            }
        };
        fetchConvertedPrice();
        return () => {
            isMounted = false;
        };
    }, [selectedPayment]);

    const { writeContractAsync: writeApproveAsync } = useWriteContract();

    const getErc20Allowance = async (erc20Address, owner, spender) => {
        const { data: erc20Data } = useReadContracts({
            contracts: [
                {
                    address: erc20Address,
                    abi: erc20Artifact.abi,
                    functionName: "allowance",
                    args: [owner, spender],
                },
            ],
            allowFailure: true,
        });

        return erc20Data[0];
    };

    const approveErc20ForMarketplace = async (erc20Address, spender, amount) => {
        await writeApproveAsync({
            address: erc20Address,
            abi: erc20Artifact.abi,
            functionName: "approve",
            args: [spender, amount],
        });
    };

    const {
        data: buyTokenHash,
        writeContractAsync: writeBuyTokenAsync,
        isPending: isPendingBuying,
    } = useWriteContract();

    async function submitBuyToken(e) {
        e.preventDefault();

        if (!compareAddressIgnoreCase(selectedPayment, zeroAddress)) {
            const erc20Allowance = await getErc20Allowance(
                selectedPayment,
                connectedAccount,
                marketplaceAddress,
            );
            const neededAllowance = supplyingPrice - erc20Allowance + 10;
            await approveErc20ForMarketplace(selectedPayment, marketplaceAddress, neededAllowance);
        }

        const txnPromise = writeBuyTokenAsync({
            address: marketplaceAddress,
            abi: marketplaceArtifact.abi,
            functionName: "buyToken",
            args: [tokenAddress, tokenId, selectedPayment],
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
                loading: "Transaction pending...",
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
            {
                duration: 6000,
            },
        );
    }

    return (
        <Dialog open={isVisible} onClose={onClose} className={"buy-dialog-container"}>
            <DialogBackdrop transition className={"buy-dialog-backdrop"}></DialogBackdrop>
            <div className={"fixed inset-0 z-20 w-screen overflow-y-auto"}>
                <div
                    className={
                        "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    }
                >
                    <DialogPanel
                        transition
                        className={"buy-dialog-panel buy-dialog-panel-animation"}
                    >
                        <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:-text-left"}>
                            <DialogTitle as="h3" className={"text-base text-gray-200"}>
                                <span>
                                    <span className={"font-semibold"}>
                                        Buying: <span className={"italic"}>{tokenName}</span> #
                                        {tokenId}
                                    </span>
                                </span>
                            </DialogTitle>
                        </div>
                        <form onSubmit={submitBuyToken}>
                            <div className={"buy-info-container"}>
                                <div className={"buy-info-details-container"}>
                                    <div className={"info-details-item"}>
                                        <span className={"info-details-title"}>NFT address: </span>
                                        <span className={"info-details-content"}>
                                            {tokenAddress}
                                        </span>
                                    </div>
                                    <div className={"info-details-item"}>
                                        <span className={"info-details-title"}>Seller: </span>
                                        <span className={"info-details-content"}>{seller}</span>
                                    </div>
                                    <div className={"info-details-item"}>
                                        <span className={"info-details-title"}>
                                            Preferred payment
                                            {strictPayment && (
                                                <span className={"info-details-title"}>
                                                    (Strict)
                                                </span>
                                            )}
                                            :{" "}
                                        </span>
                                        <span className={"info-details-content"}>
                                            {addressSymbolMap.get(preferredPayment)}
                                        </span>
                                        {!compareAddressIgnoreCase(
                                            preferredPayment,
                                            supportedTokens[0],
                                        ) && <span>({truncateStr(preferredPayment, 8)})</span>}
                                    </div>
                                    <div className={"info-details-item flex flex-row"}>
                                        <div>
                                            <span className={"info-details-title"}>Price: </span>
                                            <span className={"info-details-content"}>
                                                {formatPrice(price, preferredPayment, 8, true)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"buy-action-container"}>
                                <div className={"basis-1/2 m-3 flex flex-row items-center"}>
                                    <span className={"font-bold"}>With: </span>
                                    {isPaymentMatch ? (
                                        <span className={"italic pl-1"}>
                                            {formatPrice(price, preferredPayment, 4, false)}
                                        </span>
                                    ) : (
                                        <span className={"italic pl-1"}>
                                            {formatPrice(supplyingPrice, selectedPayment, 4, false)}
                                        </span>
                                    )}
                                    <div className={"min-w-[10] w-1/2 pl-1"}>
                                        <PaymentComboBox
                                            strictPayment={strictPayment}
                                            preferredPayment={preferredPayment}
                                            updateSelected={setSelectedPayment}
                                        />
                                    </div>
                                </div>
                                <div className={"buy-action-btn-container"}>
                                    <Button className={"buy-action-cancel-btn"} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button
                                        className={"buy-action-buy-btn"}
                                        type={"submit"}
                                        disabled={isPendingBuying}
                                    >
                                        Confirm Buy
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
export default BuyTokenModal;
