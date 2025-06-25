import React, { useState, useEffect } from "react";

import {
    Button,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    Field,
    Label,
    Description,
    Input,
} from "@headlessui/react";
import clsx from "clsx";
import GeneralCombobox from "@/components/PageComponents/Combobox/GeneralCombobox";

import { supportedTokens } from "@/config/marketplace/supportedTokens";
import { compareAddressIgnoreCase, getTokenDecimals, truncateStr } from "@/utils/web3/addressUtils";
import { formatPrice, parseToUint } from "@/utils/web3/priceUtils";
import { getConvertedPrice } from "@/utils/web3/priceUtils";

import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import { contractAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { useWriteContract } from "wagmi";

import toast from "react-hot-toast";

const UpdateListingModal = ({
    isVisible,
    onClose,
    tokenAddress,
    tokenId,
    seller,
    preferredPayment,
    price,
    strictPayment,
    connectedAccount,
}) => {
    const strictPaymentOptions = [
        { id: false, name: "No" },
        { id: true, name: "Yes" },
    ];

    const paymentOptions = [
        { id: supportedTokens[0], name: "ETH" },
        { id: supportedTokens[1], name: "wETH" },
        { id: supportedTokens[2], name: "USDC" },
        { id: supportedTokens[3], name: "DAI" },
        { id: supportedTokens[4], name: "LINK" },
        { id: supportedTokens[5], name: "UNI" },
        { id: supportedTokens[6], name: "wBTC" },
    ];

    const [updatedPayment, setUpdatedPayment] = useState(preferredPayment);
    const initialTokenDecimal = getTokenDecimals(preferredPayment).decimals;
    const [tokenDecimal, setTokenDecimal] = useState(initialTokenDecimal);

    const [updatedPrice, setUpdatedPrice] = useState(
        formatPrice(price, preferredPayment, tokenDecimal, false),
    );
    const [convertedPrice, setConvertedPrice] = useState(0);

    const [paymentChanged, setPaymentChanged] = useState(false);

    const [updatedStrictPayment, setUpdatedStrictPayment] = useState(strictPayment);

    const [isActionUpdate, setIsActionUpdate] = useState(true);

    const initialStrictPaymentOption = strictPayment
        ? strictPaymentOptions[1]
        : strictPaymentOptions[0];

    const tokenIndex = getTokenDecimals(preferredPayment).index;
    const initialPreferredPaymentOption = paymentOptions[tokenIndex];

    useEffect(() => {
        setTokenDecimal(getTokenDecimals(updatedPayment).decimals);
        setPaymentChanged(!compareAddressIgnoreCase(preferredPayment, updatedPayment));
        let isMounted = true;

        const fetchConvertedPrice = async () => {
            try {
                const convertedPrice = await getConvertedPrice(
                    preferredPayment,
                    price,
                    updatedPayment,
                );
                if (isMounted) {
                    setConvertedPrice(convertedPrice);
                }
            } catch (error) {
                console.error("Failed to get converted price:", error);
            }
        };

        fetchConvertedPrice();

        return () => {
            isMounted = false;
        };
    }, [updatedPayment]);

    const {
        data: updateListingHash,
        writeContractAsync: writeUpdateListingAsync,
        isPending: isPendingUpdate,
    } = useWriteContract();

    const {
        data: removeListingHash,
        writeContractAsync: writeRemoveListingAsync,
        isPending: isPendingRemove,
    } = useWriteContract();

    const pending = isPendingRemove || isPendingUpdate;

    async function submitListingUpdate(e) {
        e.preventDefault();

        const updatedPriceInUint = parseToUint(updatedPrice, updatedPayment);

        if (isActionUpdate) {
            const txnPromise = writeUpdateListingAsync({
                address: contractAddresses["NftMarketplaceModule#NftMarketplace"],
                abi: marketplaceArtifact.abi,
                functionName: "updateListing",
                args: [
                    tokenAddress,
                    tokenId,
                    updatedPayment,
                    updatedPriceInUint,
                    updatedStrictPayment,
                ],
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
                    loading: "Update pending...",
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
        } else {
            const txnPromise = writeRemoveListingAsync({
                address: contractAddresses["NftMarketplaceModule#NftMarketplace"],
                abi: marketplaceArtifact.abi,
                functionName: "cancelListing",
                args: [tokenAddress, tokenId],
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
                    loading: "Cancel listing pending...",
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
    }

    return (
        <Dialog open={isVisible} onClose={onClose} className={"update-dialog-container"}>
            <DialogBackdrop transition className={"update-dialog-backdrop"} />
            <div className={"fixed inset-0 z-20 w-screen overflow-y-auto"}>
                <div
                    className={
                        "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    }
                >
                    <DialogPanel
                        transition
                        className={"update-dialog-panel update-dialog-panel-animation"}
                    >
                        <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:-text-left"}>
                            <DialogTitle as="h3" className={"text-base text-gray-200"}>
                                <span>
                                    <span className={"font-semibold"}>
                                        Updating:{" "}
                                        <span className={"italic"}>
                                            {truncateStr(tokenAddress, 15)}
                                        </span>{" "}
                                        #{tokenId}
                                    </span>
                                </span>
                            </DialogTitle>
                        </div>
                        <form onSubmit={submitListingUpdate}>
                            <div className={"update-info-details-container"}>
                                <div className={"update-info-container"}>
                                    <div className={"info-details-item"}>
                                        <span className={"info-details-title"}>
                                            Strict payment:{" "}
                                        </span>
                                        <GeneralCombobox
                                            options={strictPaymentOptions}
                                            optionsZ={"z-30"}
                                            initialValue={initialStrictPaymentOption}
                                            updateSelected={setUpdatedStrictPayment}
                                        ></GeneralCombobox>
                                    </div>
                                    <div className={"info-details-item"}>
                                        <span className={"info-details-title"}>
                                            Preferred Payment:{" "}
                                        </span>
                                        <GeneralCombobox
                                            options={paymentOptions}
                                            optionsZ={"z-30"}
                                            initialValue={initialPreferredPaymentOption}
                                            updateSelected={setUpdatedPayment}
                                        ></GeneralCombobox>
                                    </div>
                                </div>
                                <div className={"update-info-container"}>
                                    <div className={"info-details-item"}>
                                        <Field>
                                            <Label className="text-sm/6 font-medium text-white">
                                                Price:
                                            </Label>
                                            <Input
                                                className={clsx(
                                                    "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                                                    "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                                                )}
                                                defaultValue={updatedPrice}
                                                type={"number"}
                                                min={"0"}
                                                step={"0.01"}
                                                onChange={(e) => setUpdatedPrice(e.target.value)}
                                            />
                                            {paymentChanged && (
                                                <Description className="text-sm/6 text-white/50">
                                                    {formatPrice(
                                                        convertedPrice,
                                                        preferredPayment,
                                                        initialTokenDecimal,
                                                        true,
                                                    )}
                                                </Description>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className={"update-action-btn-container"}>
                                    <Button className={"update-action-close-btn"} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button
                                        className={"update-action-update-btn"}
                                        onClick={() => setIsActionUpdate(true)}
                                        type={"submit"}
                                        disabled={pending}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        className={"update-action-remove-btn"}
                                        onClick={() => setIsActionUpdate(false)}
                                        type={"submit"}
                                        disabled={pending}
                                    >
                                        REMOVE
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
export default UpdateListingModal;
