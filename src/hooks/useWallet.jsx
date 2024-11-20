import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const useWallet = () => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // Check if window.ethereum is available (MetaMask is installed)
        if (window.ethereum) {
            setIsWalletInstalled(true);
        } else {
            alert("Please install MetaMask.");
        }
    }, []);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("Please install MetaMask.");
            return;
        }

        try {
            // Request accounts from MetaMask (this will pop up the MetaMask dialog to connect)
            setLoading(true);
            console.log(loading)
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            if (accounts.length > 0) {
                setLoading(false);
                console.log(loading)
                setAccount(accounts[0]); // Set the selected account
            } else {
                setLoading(false);
                console.log("No accounts selected");
            }

            // Set up provider after account is selected
            const _provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(_provider);
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    return { account, provider, connectWallet, isWalletInstalled, loading };
};
