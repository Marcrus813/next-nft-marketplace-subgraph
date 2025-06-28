import { supportedTokens } from "@/config/marketplace/supportedTokens";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

export const priceFeeds = {
    mainnet: {
        usdc: "0x986b5E1e1755e3C2440e960477f25201B0a8bbD4",
        dai: "0x773616E4d11A78F511299002da57A0a94577F1f4",
        link: "0xDC530D9457755926550b59e8ECcdaE7624181557",
        uni: "0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e",
        wbtc: "0xfdFD9C85aD200c506Cf9e21F1FD8dd01932FBB23",
    },
    sepolia: {
        usdcUsd: "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E",
        daiUsd: "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19",
        link: "0x42585eD362B3f1BCa95c640FdFf35Ef899212734",
        uni: "",
        wbtc: "0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22",
        ethUsd: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
};

export default async function handler(req, res) {
    const { token } = req.query;
    if (!token || typeof token !== "string") {
        return res.status(400).json({ error: "Token address is required" });
    }

    let tokenSupported = false;

    for (const supportedToken in supportedTokens) {
        if (compareAddressIgnoreCase(token, supportedToken)) {
            tokenSupported = true;
            break;
        }
    }

    if (!tokenSupported) {
        return res.status(400).json({ error: "Token not supported" });
    }
}
