import React from "react";
import Image from "next/image";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { truncateStr } from "@/components/FunctionComponents/Display/NFTBox";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

const TokenInfoModal = ({
    isVisible,
    onClose,
    tokenName,
    tokenAddress,
    tokenId,
    seller,
    formattedSellerAddress,
    imgUri,
    preferredPayment,
    price,
    strictPayment,
    formattedPrice,
    connectedAccount,
}) => {
    const userIsOwner = compareAddressIgnoreCase(seller, connectedAccount);

    const handleBuyBtnClick = () => {
        // TODO: Implement later
    };

    const handleUpdateBtnClick = () => {
        // TODO: Implement later
    };

    return (
        <Dialog open={isVisible} onClose={onClose} className={"dialog-container"}>
            <DialogBackdrop
                transition
                className={
                    "dialog-backdrop transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                }
            />
            <div className={"fixed inset-0 z-10 w-screen overflow-y-auto"}>
                <div
                    className={
                        "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    }
                >
                    <DialogPanel
                        transition
                        className={
                            "dialog-panel transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        }
                    >
                        <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}>
                            <DialogTitle as={"h2"} className={"text-base text-gray-200"}>
                                <span>
                                    <span className={"font-semibold"}>{`${tokenName}(`}</span>
                                    <span
                                        className={"italic"}
                                    >{`${truncateStr(tokenAddress, 15)}`}</span>
                                    <span className={"font-semibold"}>{`): #${tokenId}`}</span>
                                </span>
                            </DialogTitle>
                        </div>
                        <div className={"info-container"}>
                            <div className={"img-container"}>
                                <Image
                                    className={"rounded-lg w-full"}
                                    src={imgUri}
                                    alt={"NFT"}
                                    width={"512"}
                                    height={"512"}
                                />
                            </div>
                            <div className={"details-container"}>
                                <div className={"details-item"}>
                                    <span className={"details-title"}>Seller: </span>
                                    <span className={"details-content"}>{seller}</span>
                                </div>
                                <div className={"details-item"}>
                                    <span className={"details-title"}>Token address: </span>
                                    <span className={"details-content"}>{tokenAddress}</span>
                                </div>
                                <div className={"details-item"}>
                                    <span className={"details-title"}>Token ID: </span>
                                    <span className={"details-content"}>{tokenId}</span>
                                </div>
                                <div className={"details-item"}>
                                    <span className={"details-title"}>Price: </span>
                                    <span className={"details-content"}>{formattedPrice}</span>
                                </div>
                                <div className={"btn-container"}>
                                    <button
                                        className={"close-btn"}
                                        type={"button"}
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                    {userIsOwner ? (
                                        <button
                                            className={"update-btn"}
                                            type={"button"}
                                            onClick={handleUpdateBtnClick}
                                        >
                                            Update Listing
                                        </button>
                                    ) : (
                                        <button
                                            className={"buy-btn"}
                                            type={"button"}
                                            onClick={handleBuyBtnClick}
                                        >
                                            Buy NFT
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
export default TokenInfoModal;
