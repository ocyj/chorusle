import React from "react";
import "./Guess.css";

interface GuessProps {
  guess: string;
}

function Guess({ guess }: GuessProps) {
  return (
    <div className="guess">
      {guess.split(" ").map((word) => (
        // Set status to one of [correct, present, wrong]
        <Word key={word} guess={word} status="correct" />
      ))}
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
