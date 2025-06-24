import { useWriteContract } from "wagmi";

const {
    data: updateListingHash,
    writeContractAsync: writeUpdateListingAsync,
    isPending: isPendingUpdate,
} = useWriteContract();
