import { ethers } from "ethers";

const contractAddress = "0xB2E1185468e57A801a54162F27725CbD5B0EB4a6";
const contractABI = [
    "function vote(uint proposal) public",
    // Add other ABI items if needed
];

export const getVotingContract = (provider) => {
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
