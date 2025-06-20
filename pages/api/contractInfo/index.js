import { contractAddresses } from "@/assets/artifacts/chain-11155111/addresses";
import { marketplaceArtifact } from "@/assets/artifacts/chain-11155111/marketplace-artifact";

const handler = (req, res) => {
    try {
        res.status(200).json({
            addresses: contractAddresses,
            artifact: marketplaceArtifact,
        });
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error.message}` });
    }
};

export default handler;
