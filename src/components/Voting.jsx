import React, { useState } from "react";
import { getVotingContract } from "../utils/votingContract";

const Voting = ({ provider }) => {
    const [proposal, setProposal] = useState("");

    const castVote = async () => {
        if (provider && proposal) {
            const contract = getVotingContract(provider);
            try {
                const tx = await contract.vote(proposal);
                await tx.wait();
                alert("Vote cast successfully!");
            } catch (err) {
                console.error("Failed to cast vote:", err);
            }
        }
    };

    return (
        <div>
            <select
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                className="border p-2 m-2"
            >
                <option value="">Select Proposal</option>
                <option value="1">Proposal 1</option>
                <option value="2">Proposal 2</option>
            </select>
            <button onClick={castVote} className="bg-purple-500 text-white py-2 px-4 rounded">
                Cast Vote
            </button>
        </div>
    );
};

export default Voting;

