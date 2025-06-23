import React from "react";
import Image from "next/image";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import { truncateStr, compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

const TokenInfoModal = ({
    isVisible,
    onClose,
    tokenName,
    tokenAddress,
    tokenId,
    seller,
    imgUri,
    formattedPrice,
    connectedAccount,
    onBuyClick,
    onUpdateClick,
}) => {
    const userIsOwner = compareAddressIgnoreCase(seller, connectedAccount);

    return (
        <Dialog open={isVisible} onClose={onClose} className={"info-dialog-container"}>
            <DialogBackdrop
                transition
                className={"info-dialog-backdrop info-dialog-backdrop-animation"}
            />
            <div className={"fixed inset-0 z-10 w-screen overflow-y-auto"}>
                <div
                    className={
                        "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    }
                >
                    <DialogPanel
                        transition
                        className={"info-dialog-panel info-dialog-panel-animation"}
                    >
                        <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}>
                            <DialogTitle as="h3" className={"text-base text-gray-200"}>
                                <span>
                                    <span className={"font-semibold"}>{`${tokenName}(`}</span>
                                    <span
                                        className={"italic"}
                                    >{`${truncateStr(tokenAddress, 15)}`}</span>
                                    <span className={"font-semibold"}>{`): #${tokenId}`}</span>
                                </span>
                            </DialogTitle>
                        </div>
                        <div className={"info-info-container"}>
                            <div className={"info-img-container"}>
                                <Image
                                    className={"rounded-lg w-full"}
                                    src={imgUri}
                                    alt={"NFT"}
                                    width={"512"}
                                    height={"512"}
                                />
                            </div>
                            <div className={"info-details-container"}>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>Seller: </span>
                                    <span className={"info-details-content"}>{seller}</span>
                                </div>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>Token address: </span>
                                    <span className={"info-details-content"}>{tokenAddress}</span>
                                </div>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>Token ID: </span>
                                    <span className={"info-details-content"}>{tokenId}</span>
                                </div>
                                <div className={"info-details-item"}>
                                    <span className={"info-details-title"}>Price: </span>
                                    <span className={"info-details-content"}>{formattedPrice}</span>
                                </div>
                                <div className={"info-btn-container"}>
                                    <Button
                                        className={"info-close-btn"}
                                        type={"button"}
                                        onClick={onClose}
                                    >
                                        Close
                                    </Button>
                                    {userIsOwner ? (
                                        <Button
                                            className={"info-update-btn mr-1"}
                                            type={"button"}
                                            onClick={onUpdateClick}
                                        >
                                            Update Listing
                                        </Button>
                                    ) : (
                                        <Button
                                            className={"info-buy-btn mr-1"}
                                            type={"button"}
                                            onClick={onBuyClick}
                                        >
                                            Buy NFT
                                        </Button>
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
