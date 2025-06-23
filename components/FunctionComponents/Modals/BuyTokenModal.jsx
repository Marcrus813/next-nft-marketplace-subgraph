import React, { useState, Fragment, useEffect } from "react";

import {
    Button,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    Transition,
} from "@headlessui/react";

import { supportedTokens } from "@/config/marketplace/supportedTokens";

import { useWriteContract } from "wagmi";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import { truncateStr } from "@/utils/web3/addressUtils";
import { formatPrice } from "@/utils/web3/unitUtils";

import {
    approveErc20ForMarketplace,
    getConvertedPrice,
} from "@/components/FunctionComponents/Modals/BuyTokenModal.js";
import PaymentComboBox from "@/components/FunctionComponents/PaymentComboBox";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

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
    const isPaymentMatch = compareAddressIgnoreCase(selectedPayment, preferredPayment);
    let supplyingPrice;

    useEffect(() => {
        supplyingPrice = getConvertedPrice(preferredPayment, price, selectedPayment);
    }, [selectedPayment]);

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
                        <div className={"buy-info-container"}>
                            <div className={"buy-info-details-container"}>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>NFT address: </span>
                                    <span className={"info-details-content"}>{tokenAddress}</span>
                                </div>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>Seller: </span>
                                    <span className={"info-details-content"}>{seller}</span>
                                </div>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>
                                        Preferred payment
                                        {strictPayment && (
                                            <span className={"info-details-title"}>(Strict)</span>
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
                                        {formatPrice(price, preferredPayment, 8, false)}
                                    </span>
                                ) : (
                                    <span className={"italic pl-1"}>
                                        {formatPrice(
                                            getConvertedPrice(
                                                preferredPayment,
                                                price,
                                                selectedPayment,
                                            ),
                                            selectedPayment,
                                            8,
                                            false,
                                        )}
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
                                <Button className={"buy-action-buy-btn"}>Confirm Buy</Button>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
export default BuyTokenModal;
