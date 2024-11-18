import React from "react";

const WalletConnection = ({ connectWallet, account }) => {
    return (
        <div>
            <button onClick={connectWallet} className="bg-blue-500 text-white py-2 px-4 rounded">
                {account ? `Connected: ${account}` : "Connect Wallet"}
            </button>
        </div>
    );
};

export default WalletConnection;

