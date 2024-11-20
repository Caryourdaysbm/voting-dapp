import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xB2E1185468e57A801a54162F27725CbD5B0EB4a6";
const CONTRACT_ABI = [
    {
        "inputs": [{ "internalType": "uint8", "name": "proposal", "type": "uint8" }],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
];

export const getVotingContract = (provider) => {
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider.getSigner());
};
