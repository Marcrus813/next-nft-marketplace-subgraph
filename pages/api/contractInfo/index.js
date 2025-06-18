import { contractAddresses as sepoliaAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { contractArtifact as sepoliaArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";

const handler = (req, res) => {
    try {
        res.status(200).json({
            addresses: sepoliaAddresses,
            artifact: sepoliaArtifact,
        });
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error.message}` });
    }
};

export default handler;
