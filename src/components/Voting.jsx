import React, { useState } from "react";
import { getVotingContract } from "../utils/votingContract";

const Voting = ({ provider, account }) => {
    const [proposal, setProposal] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false)
    const castVote = async () => {
        setStatus("");

        try {
            const contract = getVotingContract(provider);
            setLoading(true)
            const tx = await contract.vote(parseInt(proposal));
            setLoading(true)
            await tx.wait();
            setLoading(false)
            setStatus("Vote cast successfully!");
        } catch (err) {
            setLoading(false)
            console.error("Failed to cast vote:", err);
            setStatus("Failed to cast vote. Please try again.");
        }
    };

    return (
        <div className="align-middle text-center mx-auto mt-16 bg-gray-200 rounded-lg max-w-[90%] py-7 px-10">
            <h2 className="text-xl font-bold text-purple-800">Vote for a Proposal</h2>
            <select
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                className="border p-2 m-2"
            >
                <option value="">Select Proposal</option>
                <option value="1">Proposal 1</option>
                <option value="2">Proposal 2</option>
            </select>
            { loading ? <button disabled className="bg-purple-500 text-white py-2 px-4 rounded">
                Voting...
            </button> : <button onClick={castVote} className="bg-purple-500 text-white py-2 px-4 rounded">
                Cast Vote
            </button>  }
            {status && <p className="mt-3">{status}</p>}
        </div>
    );
};

export default Voting;
