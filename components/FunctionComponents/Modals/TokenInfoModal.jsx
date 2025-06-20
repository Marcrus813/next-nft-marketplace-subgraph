import React, { Fragment } from "react";
import Image from "next/image";

import { Dialog, DialogBackdrop, DialogPanel, Transition } from "@headlessui/react";

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
    const userIsOwner = seller === connectedAccount;

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
                            "dialog-panel transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        }
                    >
                        <div className={"bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"}>
                            <div className={"sm:flex sm:items-start"}>
                                <div
                                    className={
                                        "mx-auto flex size-12 shrink-0 items-center justify-center rounded-lg"
                                    }
                                >
                                    <Image
                                        className={"w-3xs"}
                                        src={imgUri}
                                        alt={"NFT"}
                                        width={"256"}
                                        height={"256"}
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
export default TokenInfoModal;
