/*
 * Used to represent a listing
 * */
import React, { useState, useEffect } from "react";
import Image from "next/image";

import TokenInfoModal from "@/components/FunctionComponents/Modals/TokenInfoModal";

import { supportedTokens } from "@/config/marketplace/supportedTokens";

import { formatUnits } from "viem";
import { compareAddressIgnoreCase, truncateStr } from "@/utils/web3/addressUtils";
import { formatPrice } from "@/utils/web3/priceUtils";

import { useAccount, useReadContracts } from "wagmi";

import contractAddresses from "@/assets/artifacts/chain-11155111/addresses";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";
import { svgNftArtifact } from "@/assets/artifacts/chain-11155111/svgNft-artifact";

import NftCard from "@/components/FunctionComponents/Display/NFTCard";
import BuyTokenModal from "@/components/FunctionComponents/Modals/BuyTokenModal";
import UpdateListingModal from "@/components/FunctionComponents/Modals/UpdateListingModal";

const NftBox = ({ tokenAddress, tokenId, preferredPayment, price, strictPayment, seller }) => {
    const { address: account, isConnected } = useAccount();

    const [imgUri, setImgUri] = useState("");
    const [tokenName, setTokenName] = useState("");
    const [tokenDescription, setTokenDescription] = useState("");

    const [showInfoModal, setShowInfoModal] = useState(false);
    const hideInfoModal = () => {
        setShowInfoModal(false);
    };
    const [showBuyModal, setShowBuyModal] = useState(false);
    const hideBuyModal = () => {
        setShowBuyModal(false);
    };

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const hideUpdateModal = () => {
        setShowUpdateModal(false);
    };

    // Use wagmi to get contract data
    const {
        data: readNftResult,
        isFetching: isFetchingTokenUri,
        error: errorFetchingTokenUri,
        // refetch: refetchTokenUri,
    } = useReadContracts({
        contracts: tokenAddress
            ? [
                  {
                      address: tokenAddress,
                      abi: svgNftArtifact.abi,
                      functionName: "tokenURI",
                      args: [tokenId],
                  },
              ]
            : [],
        allowFailure: true,
        query: { enabled: !!tokenAddress },
    });

    const updateUi = async () => {
        const tokenUri = readNftResult[0].result;

        if (!errorFetchingTokenUri) {
            if (tokenUri) {
                const requestUrl = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
                const tokenUriResponse = await (await fetch(requestUrl)).json();
                const imgUri = tokenUriResponse.image;
                const imgUriUrl = imgUri.replace("ipfs://", "https://ipfs.io/ipfs/");

                setImgUri(imgUriUrl);
                setTokenName(tokenUriResponse.name);
                setTokenDescription(tokenUriResponse.description);
            }
        }
    };

    useEffect(() => {
        if (isConnected && !isFetchingTokenUri) {
            updateUi();
        }
    }, [isConnected, isFetchingTokenUri, account]);

    const isOwnedByUser = compareAddressIgnoreCase(seller, account) || seller === undefined;
    const formattedSellerAddress = isOwnedByUser ? "you" : truncateStr(seller || "", 15);
    const formattedPrice = formatPrice(price, preferredPayment, 4, true);

    const handleCardClick = () => {
        setShowInfoModal(true);
    };

    const handleInfoModalClose = () => {
        hideInfoModal();
    };

    const handleBuyBtnClick = () => {
        setShowBuyModal(true);
    };
    const handelBuyModalClose = () => {
        hideBuyModal();
    };

    const handleUpdateBtnClick = () => {
        setShowUpdateModal(true);
    };
    const handelUpdateModalClose = () => {
        hideUpdateModal();
    };

    return (
        <>
            <div>
                <div>
                    {
                        <div>
                            <TokenInfoModal
                                isVisible={showInfoModal}
                                onClose={handleInfoModalClose}
                                tokenName={tokenName}
                                tokenAddress={tokenAddress}
                                tokenId={tokenId}
                                seller={seller}
                                formattedSellerAddress={formattedSellerAddress}
                                imgUri={imgUri}
                                preferredPayment={preferredPayment}
                                price={price}
                                strictPayment={strictPayment}
                                formattedPrice={formattedPrice}
                                connectedAccount={account}
                                onBuyClick={handleBuyBtnClick}
                                onUpdateClick={handleUpdateBtnClick}
                            />
                            <BuyTokenModal
                                isVisible={showBuyModal}
                                onClose={handelBuyModalClose}
                                tokenName={tokenName}
                                tokenAddress={tokenAddress}
                                tokenId={tokenId}
                                seller={seller}
                                preferredPayment={preferredPayment}
                                price={price}
                                strictPayment={strictPayment}
                                connectedAccount={account}
                            ></BuyTokenModal>
                            <UpdateListingModal
                                isVisible={showUpdateModal}
                                onClose={handelUpdateModalClose}
                                tokenAddress={tokenAddress}
                                tokenId={tokenId}
                                seller={seller}
                                preferredPayment={preferredPayment}
                                price={price}
                                strictPayment={strictPayment}
                                connectedAccount={account}
                            ></UpdateListingModal>
                            <NftCard
                                title={tokenName}
                                description={tokenDescription}
                                onClick={handleCardClick}
                            >
                                {imgUri ? (
                                    <div className={"p-2"}>
                                        <div className={"flex flex-col items-end gap-2"}>
                                            <div>
                                                {tokenName} #{tokenId}
                                            </div>
                                            <div className={"italic text-sm"}>
                                                Owned by {formattedSellerAddress}
                                            </div>
                                            <Image
                                                loader={() => imgUri}
                                                src={imgUri}
                                                height={"200"}
                                                width={"200"}
                                                alt={`${tokenName}: #${tokenId}`}
                                            />
                                            <div className={"font-bold"}>
                                                Price: {formattedPrice}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>Loading NFT data...</div>
                                )}
                            </NftCard>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};
export default NftBox;
