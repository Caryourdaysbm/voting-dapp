import React from "react";
import { useWallet } from "./hooks/useWallet";
import Balance from "./components/Balance";
import SendETH from "./components/SendETH";
import Voting from "./components/Voting";

const App = () => {
  const { account, provider, connectWallet, isWalletInstalled, loading} = useWallet();

  return (
    <div className="flex flex-col justify-center align-middle md:max-w-[80%] my-auto mx-auto">
      {!account && isWalletInstalled ? (
        <div className="flex flex-col justify-center align-middle md:max-w-[80%] my-auto mx-auto">
          <p className="text-center text-gray-600 mt-16 ">
            Connect your wallet to get started. <br /> 
          </p>

          { loading ? ( <button
            disabled
            className="flex flex-col justify-center align-middle  md:max-w-[80%] mx-auto  bg-purple-300 text-white py-2 px-4 rounded my-4 "
          >
            Connecting...
          </button>) : ( <button
            onClick={connectWallet}
            className="flex flex-col justify-center align-middle  md:max-w-[80%] mx-auto  bg-purple-500 text-white py-2 px-4 rounded my-4 "
          >
            Connect Wallet
          </button>)}
          <p className="text-center text-red-600">Make sure you're are on
          your desired MetaMask account{" "}</p>

        </div>
      ) : (
        <div className="flex justify-center align-middle max-w-[99%]  mt-16 mx-auto bg-purple-700 text-white text-wrap py-2 px-4 rounded">
          {account ? `Connected: ${account}` : "MetaMask not installed"}
        </div>
      )}

      {provider && account && (
        <>
          <Balance provider={provider} account={account} />
          <SendETH provider={provider} account={account} />
          <Voting provider={provider} account={account} />
        </>
      )}
    </div>
  );
};

export default App;
