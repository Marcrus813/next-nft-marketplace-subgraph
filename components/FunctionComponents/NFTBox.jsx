import React, { useEffect, useState } from "react";
import {
    useWriteContract,
    useReadContracts,
    useChainId,
    useWaitForTransactionReceipt,
    useWatchContractEvent,
    useAccount,
} from "wagmi";
import { formatEther } from "viem";
import { ethers } from "ethers";

import { contractArtifact as svgNftArtifact } from "@/assets/artifacts/chain-11155111/svgNft-artifact";
import { contractArtifact as marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";

const NftBox = () => {
    return <div>NftBox</div>;
};
export default NftBox;
