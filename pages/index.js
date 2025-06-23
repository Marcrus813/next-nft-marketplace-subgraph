import { server } from "@/config/serverAddress";

import queries from "@/assets/queries/subgraphQueries";
import { useAccount } from "wagmi";
import { useQuery } from "@apollo/client";
import NftBox from "@/components/FunctionComponents/Display/NFTBox";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/contractInfo`);

    const data = await res.json();

    return {
        props: {
            marketplaceContractInfo: {
                contractName: data.artifact.contractName,
                abi: data.artifact.abi,
                address: data.addresses["NftMarketplaceModule#NftMarketplace"],
            },
        },
    };
};

const Home = ({ marketplaceContractInfo }) => {
    const { isConnected, address: account } = useAccount();

    const {
        loading,
        error,
        data: allActiveListings,
    } = useQuery(queries.GET_ACTIVE_LISTINGS_ALL, {
        variables: { buyer: ZERO_ADDRESS },
        /*pollInterval: 300000,
        fetchPolicy: "cache-and-network",*/
    });

    return (
        <>
            <div className={"listings-container"}>
                <h1 className={"py-4 px-4 font-bold text-2xl"}>Recently Listed</h1>
                <div className={"listings-container items-container"}>
                    {isConnected ? (
                        loading ? (
                            <div>Loading market data...</div>
                        ) : !allActiveListings ? (
                            <div>Nothing here...</div>
                        ) : (
                            allActiveListings.activeListings.map((nft) => {
                                // console.log(nft);
                                const {
                                    seller,
                                    tokenAddress,
                                    tokenId,
                                    preferredPayment,
                                    strictPayment,
                                    price,
                                } = nft;
                                return (
                                    <div key={`${tokenAddress}-${tokenId}`} className={"px-1 py-1"}>
                                        <NftBox
                                            tokenAddress={tokenAddress}
                                            tokenId={tokenId}
                                            preferredPayment={preferredPayment}
                                            price={price}
                                            strictPayment={strictPayment}
                                            seller={seller}
                                        ></NftBox>
                                    </div>
                                );
                            })
                        )
                    ) : (
                        <div>Web3 not connected</div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Home;
