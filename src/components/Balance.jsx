import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const Balance = ({ provider, account }) => {
    const [balance, setBalance] = useState("");

    useEffect(() => {
        const fetchBalance = async () => {
            if (provider && account) {
                const bal = await provider.getBalance(account);
                setBalance(ethers.utils.formatEther(bal));
            }
        };
        fetchBalance();
    }, [provider, account]);

    return <div>Balance: {balance} ETH</div>;
};

export default Balance;

