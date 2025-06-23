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
