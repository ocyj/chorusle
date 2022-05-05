import React from "react";
import "./Guess.css";
import { GuessStatus } from "./utils";

interface GuessProps {
  guess: Array<string>;
  statuses: Array<GuessStatus>;
}

function Guess({ guess, statuses }: GuessProps) {
  return (
    <div className="guess">
      {statuses.map((status, idx) => {
        // Set status to one of [correct, present, wrong]
        return <Word key={idx} guess={guess[idx]} status={status} />;
      })}
    </div>
  );
}

function Word({ guess, status }: any) {
  return (
    <div className="word">
      <div className={status}>{guess}</div>
    </div>
  );
}

export default Guess;
