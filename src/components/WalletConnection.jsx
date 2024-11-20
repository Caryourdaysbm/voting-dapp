import React from "react";

const WalletConnection = ({ connectWallet, account }) => {
    return (
        <div className="text-center mt-10">
            {account ? (
                <p className="text-green-600 font-bold">
                    Wallet Connected: {account}
                </p>
            ) : (
                <button
                    onClick={connectWallet}
                    className="bg-purple-500 text-white py-2 px-4 rounded"
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default WalletConnection;
