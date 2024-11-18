import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const useWallet = () => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const newProvider = new ethers.providers.Web3Provider(window.ethereum);
                await newProvider.send("eth_requestAccounts", []);
                setProvider(newProvider);
                const accounts = await newProvider.listAccounts();
                setAccount(accounts[0]);
            } catch (err) {
                console.error(err);
            }
        } else {
            alert("MetaMask not found");
        }
    };

    return { connectWallet, account, provider };
};
