import React, { useState, Fragment, useEffect } from "react";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition } from "@headlessui/react";

import { supportedTokens } from "@/config/marketplace/supportedTokens";

import { useWriteContract } from "wagmi";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import { formatPrice, truncateStr } from "@/components/FunctionComponents/Display/NFTBox";

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
                                        Buying:{" "}
                                        <span className={"italic"}>
                                            {truncateStr(tokenAddress, 15)}
                                        </span>{" "}
                                        #{tokenId}
                                    </span>
                                </span>
                            </DialogTitle>
                        </div>
                        <div className={"buy-info-container"}>
                            <div className={"buy-info-details-container"}>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>
                                        Preferred payment:{" "}
                                    </span>
                                    <span className={"info-details-content"}>
                                        {addressSymbolMap.get(preferredPayment)}
                                    </span>
                                    {strictPayment && (
                                        <span className={"info-details-title"}> (Strict)</span>
                                    )}
                                </div>
                                <div className={"info-details-item flex flex-row"}>
                                    <div>
                                        <span className={"info-details-title"}>Price: </span>
                                        <span className={"info-details-content"}>
                                            {formatPrice(price, preferredPayment, 8)}
                                        </span>
                                    </div>
                                    {!isPaymentMatch && (
                                        <div>
                                            <span className={"info-details-title"}>
                                                (Equivalent:{" "}
                                            </span>
                                            <span className={"info-details-content"}>
                                                {formatPrice(supplyingPrice, selectedPayment, 8)})
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={"buy-action-container"}>
                            <div className={"basis-1/2 m-3 flex flex-row items-center"}>
                                <span className={"font-semibold"}>With: </span>
                                <div className={"min-w-[10] w-1/2"}>
                                    <PaymentComboBox
                                        strictPayment={strictPayment}
                                        preferredPayment={preferredPayment}
                                        updateSelected={setSelectedPayment}
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
export default BuyTokenModal;
