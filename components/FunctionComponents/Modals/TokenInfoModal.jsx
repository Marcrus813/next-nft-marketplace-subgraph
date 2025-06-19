import React, { Fragment } from "react";
import Image from "next/image";
import "./styles.css";

import { Dialog, Transition } from "@headlessui/react";

const TokenInfoModal = ({
    isVisible,
    onClose,
    tokenName,
    tokenAddress,
    tokenId,
    seller,
    formattedSellerAddress,
    imgUri,
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
        <Transition appear={isVisible} as={Fragment}>
            <Dialog as={"div"} className={"relative z-10"} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter={"ease-out duration-300"}
                    enterFrom={"opacity-0"}
                    enterTo={"opacity-100"}
                    leave={"ease-in duration-200"}
                    leaveFrom={"opacity-100"}
                    leaveTo={"opacity-0"}
                >
                    <div className="modal-backdrop" />
                </Transition.Child>

                <div className={"modal-container"}>
                    <div className={"modal-content-wrapper"}>
                        <Transition.Child
                            as={Fragment}
                            enter={"ease-out duration-300"}
                            enterFrom={"opacity-0 scale-95"}
                            enterTo={"opacity-100 scale-100"}
                            leave={"ease-in duration-200"}
                            leaveFrom={"opacity-100 scale-100"}
                            leaveTo={"opacity-0 scale-95"}
                        >
                            <Dialog.Panel className={"modal-panel"}>
                                <Dialog.Title as="h3" className={"modal-title"}>
                                    {`${tokenAddress} #${tokenId} Details`}
                                </Dialog.Title>

                                <div className={"mt-4"}>
                                    <div className={"flex flex-col items-center gap-4"}>
                                        <div className={"nft-image-container"}>
                                            <Image
                                                className={"object-contain"}
                                                src={imgUri}
                                                alt={"NFT"}
                                                fill
                                                loader={() => imgUri}
                                            />
                                        </div>

                                        <div className={"details-container"}>
                                            <div className={"detail-row"}>
                                                <span className={"detail-row"}>Token Name:</span>
                                                <span>{tokenName}</span>
                                            </div>
                                            <div className={"detail-row"}>
                                                <span className={"detail-row"}>Token Address:</span>
                                                <span>{tokenAddress}</span>
                                            </div>
                                            <div className={"detail-row"}>
                                                <span className={"detail-label"}>Token ID:</span>
                                                <span>#{tokenId}</span>
                                            </div>
                                            <div className={"detail-row"}>
                                                <span className={"detail-row"}>Owner:</span>
                                                <span>{formattedSellerAddress}</span>
                                            </div>
                                            <div className={"detail-row"}>
                                                <span className={"detail-row"}>Price:</span>
                                                <span>{formattedPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"button-container"}>
                                    {userIsOwner ? (
                                        <button
                                            type={"button"}
                                            className={"update-button"}
                                            onClick={handleUpdateBtnClick}
                                        >
                                            Update Listing
                                        </button>
                                    ) : (
                                        <button
                                            type={"button"}
                                            className={"buy-button"}
                                            onClick={handleBuyBtnClick}
                                        >
                                            Buy NFT
                                        </button>
                                    )}
                                    <button
                                        type={"button"}
                                        className={"close-button"}
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
export default TokenInfoModal;
