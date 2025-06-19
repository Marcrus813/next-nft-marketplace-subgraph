import React from "react";

import { Dialog, Transition } from "@headlessui/react";

import { useWriteContract } from "wagmi";
import { contractArtifact as marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";

const TokenInfoModal = ({
    isVisible,
    onClose,
    tokenAddress,
    tokenId,
    seller,
    imgUri,
    price,
    preferredPayment,
    strictPayment,
    connectedAccount,
}) => {
    return <div>TokenInfoModal</div>;
};
export default TokenInfoModal;
