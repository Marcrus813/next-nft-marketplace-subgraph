import { http, createConfig } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, hardhat } from "wagmi/chains";

/*export const wagmiConfig = createConfig({
    chains: [mainnet, sepolia, hardhat],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [hardhat.id]: http(),
    },
    ssr: true,
});*/

export const config = getDefaultConfig({
    appName: "NFT Marketplace",
    projectId: "257b455e1caaaab8e825027fad7bf748",
    chains: [mainnet, sepolia, hardhat],
    ssr: true,
});
