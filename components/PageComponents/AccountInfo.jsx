import React from "react";

import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

const AccountInfo = () => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName();
    const { data: ensAvatar } = useEnsAvatar();

    return (
        <div>
            {ensAvatar && <img alt={"ENS Avatar"} src={ensAvatar} />}
            {address && (
                <div>{ensName ? `${ensName} (${address})` : address}</div>
            )}
            <button onClick={() => disconnect()}>Disconnect</button>
        </div>
    );
};
export default AccountInfo;
