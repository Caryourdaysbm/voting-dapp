import React from "react";
import WalletConnection from "./components/WalletConnection";
import Balance from "./components/Balance";
import SendETH from "./components/SendETH";
import Voting from "./components/Voting";
import { useWallet } from "./hooks/useWallet";

const App = () => {
    const { connectWallet, account, provider } = useWallet();

    return (
        <div className=" flex flex-col justify-center align-middle  md:max-w-[80%] my-auto mx-auto  ">
            <WalletConnection connectWallet={connectWallet} account={account} />
            {provider && (
                <>
                    <Balance provider={provider} account={account} />
                    <SendETH provider={provider} account={account} />
                    <Voting provider={provider} />
                </>
            )}
        </div>
    );
};

export default App;
