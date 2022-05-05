import exp from "constants";
import React from "react";
import Guess from "./Guess";
import checkGuess from "./utils";

interface ChorusleProps {
  answer: string;
  guesses: Array<string>;
}
function Chorusle({ answer, guesses }: ChorusleProps) {
  const correctAnswer = answer.toLowerCase();

  const guess1 = guesses[0].toLowerCase();
  const guess2 = guesses[1].toLowerCase();
  const statuses1 = checkGuess(correctAnswer, guess1);
  const statuses2 = checkGuess(correctAnswer, guess2);

  return (
    <>
      <Guess guess={guess1.split(" ")} statuses={statuses1} />
      <Guess guess={guess2.split(" ")} statuses={statuses2} />
    </>
  );
}

export default Chorusle;
