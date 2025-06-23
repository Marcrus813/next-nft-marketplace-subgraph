import { supportedTokens } from "@/config/marketplace/supportedTokens";
import { formatUnits } from "viem";
import { compareAddressIgnoreCase } from "@/utils/web3/addressUtils";

export const formatPrice = (price, paymentAddress, keepDecimal, showSymbol) => {
    let symbol, decimal;
    if (compareAddressIgnoreCase(paymentAddress, supportedTokens[0])) {
        // ETH
        symbol = "ETH";
        decimal = 18;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[1])) {
        // wETH
        symbol = "wETH";
        decimal = 18;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[2])) {
        // USDC
        symbol = "USDC";
        decimal = 6;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[3])) {
        // DAI
        symbol = "DAI";
        decimal = 18;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[4])) {
        // LINK
        symbol = "LINK";
        decimal = 18;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[5])) {
        // UNI
        symbol = "UNI";
        decimal = 18;
    } else if (compareAddressIgnoreCase(paymentAddress, supportedTokens[6])) {
        // wBTC
        symbol = "wBTC";
        decimal = 8;
    }
    const formattedPrice = formatUnits(price, decimal);
    const roundedPrice = Number(formattedPrice).toFixed(keepDecimal);
    return showSymbol ? `${roundedPrice} ${symbol}` : `${roundedPrice}`;
};
