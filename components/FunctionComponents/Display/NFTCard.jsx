/*
 * Used to present the NFT being listed
 * */
import React, { useState } from "react";

const NftCard = ({ title, description, onClick, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const tipNotEmpty = title || description;

    return (
        <>
            <div
                className={"nft-card"}
                onClick={onClick}
                onMouseEnter={() => tipNotEmpty && setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
            </div>
            {showTooltip && tipNotEmpty && (
                <div className={"nft-tooltip"}>
                    {title && <h4 className={"tooltip-title"}>{title}</h4>}
                    {description && <p className={"tooltip-description"}>{description}</p>}
                </div>
            )}
        </>
    );
};
export default NftCard;
