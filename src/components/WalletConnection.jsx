import React from "react";

const WalletConnection = ({ connectWallet, account }) => {
    return (
        <div>
            <button onClick={connectWallet} className="flex justify-center align-middle max-w-[99%]  mt-16 mx-auto bg-blue-700 text-white text-wrap py-2 px-4 rounded">
                {account ? `Connected: ${account}` : "Connect Wallet"}
            </button>
        </div>
    );
};

export default WalletConnection;

