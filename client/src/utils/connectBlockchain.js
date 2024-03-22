import { ethers } from "ethers";
import SmartContract from "../../CrowdFunding.json";

export default () => {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_PROVIDER_URL);
    const signer = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
    const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, SmartContract['abi'], signer);
    
    return { contract, provider, signer };
}