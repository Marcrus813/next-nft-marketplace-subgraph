import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

// Pre-constructed robust way
const Header = () => {
    // `ConnectButton` is the sum of what we've done before -- Not using Moralis anymore, now using Wagmi
    // const { isConnected } = useAccount();

    /*if (isConnected) {
        return <AccountInfo />;
    } else {
        return <ConnectButton label={"Connect"} />;
    }*/

    return (
        <div className={"border-b-2 flex flex-row"}>
            <h1 className={"py-4 px-4 font-bold text-3xl"}>NFT Marketplace</h1>
            <div className={"flex flex-row items-center ml-auto py-2 px-4"}>
                <Link href={"/"} className={"px-4 font-bold text-2xl"}>
                    Home
                </Link>
                <Link href={"/assets"} className={"px-4 font-bold text-2xl"}>
                    Manage assets
                </Link>
                <ConnectButton label={"Connect"} />
            </div>
        </div>
    ); // The state change is handled in the component
};
export default Header;
