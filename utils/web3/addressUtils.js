import { supportedTokens } from "@/config/marketplace/supportedTokens";

export const compareAddressIgnoreCase = (addr1, addr2) => {
    return addr1.toLowerCase() === addr2.toLowerCase();
};

export const truncateStr = (fullStr, strLen) => {
    if (fullStr.length <= strLen) return fullStr;

    const separator = "...";
    const separatorLength = separator.length;
    const charsToShow = strLen - separatorLength;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return (
        fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars)
    );
};

export const getTokenDecimals = (tokenAddress) => {
    let index;
    let decimals;
    if (compareAddressIgnoreCase(tokenAddress, supportedTokens[0])) {
        // ETH
        index = 0;
        decimals = 18;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[1])) {
        // wETH
        index = 1;
        decimals = 18;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[2])) {
        // USDC
        index = 2;
        decimals = 6;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[3])) {
        // DAI
        index = 3;
        decimals = 18;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[4])) {
        // LINK
        index = 4;
        decimals = 18;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[5])) {
        // UNI
        index = 5;
        decimals = 18;
    } else if (compareAddressIgnoreCase(tokenAddress, supportedTokens[6])) {
        // wBTC
        index = 6;
        decimals = 8;
    }
    return { index, decimals };
};
