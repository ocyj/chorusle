import exp from "constants";
import React from "react";
import Guess from "./Guess";

interface ChorusleProps {
  answer: string;
  guesses: Array<string>;
}
function Chorusle({ answer, guesses }: ChorusleProps) {
  const correctAnswer = answer.toLowerCase().split(" ");

  const guess1Words = guesses[0].toLowerCase().split(" ");
  const statuses1 = correctAnswer.map((correctWord, idx) =>
    correctWord === guess1Words[idx] ? "correct" : "wrong"
  );
  const guess2Words = guesses[1].toLowerCase().split(" ");
  const statuses2 = correctAnswer.map((correctWord, idx) =>
    correctWord === guess2Words[idx] ? "correct" : "wrong"
  );
  return (
    <>
      <Guess guess={guess1Words} statuses={statuses1} />
      <Guess guess={guess2Words} statuses={statuses2} />
    </>
  );
}

export default Chorusle;
