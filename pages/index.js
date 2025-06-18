import { server } from "@/config/serverAddress";

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/contractInfo`);

    const data = await res.json();

    return {
        props: {
            contractInfo: {
                contractName: data.artifact.contractName,
                abi: data.artifact.abi,
                address: data.addresses["NftMarketplaceModule#NftMarketplace"],
            },
        },
    };
};

const Home = ({ contractInfo }) => {
    return <div>Index</div>;
};
export default Home;
