import React, { useState } from "react";
import { ethers } from "ethers";

const SendETH = ({ provider, account }) => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");

    const sendETH = async () => {
        if (provider && recipient && amount) {
            const signer = provider.getSigner();
            try {
                await signer.sendTransaction({
                    to: recipient,
                    value: ethers.utils.parseEther(amount),
                });
                alert("Transaction successful!");
            } catch (err) {
                console.error("Transaction failed:", err);
            }
        }
    };

    return (
        <div>
            <input
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="border p-2 m-2"
            />
            <input
                placeholder="Amount in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 m-2"
            />
            <button onClick={sendETH} className="bg-green-500 text-white py-2 px-4 rounded">
                Send ETH
            </button>
        </div>
    );
};

export default SendETH;

