import exp from "constants";
import React, { useState } from "react";
import Guess from "./Guess";
import InputGuess from "./InputGuess";
import checkGuess, { GuessStatus } from "./utils";

interface ChorusleProps {
  answer: string;
  initialGuesses: Array<string>;
  numGuessesAllowed: number;
}

function Chorusle({
  answer,
  initialGuesses,
  numGuessesAllowed,
}: ChorusleProps) {
  const [guesses, setGuesses] = useState(initialGuesses);
  const correctAnswer = answer.toLowerCase();
  const numWordsAnswer = correctAnswer.split(" ").length;

  let statuses = guesses.map((guess) =>
    checkGuess(correctAnswer, guess.toLowerCase())
  );
  let guessesToRender = [...guesses];

  const numGuessesLeft = numGuessesAllowed - guesses.length;
  if (numGuessesLeft > 0) {
    const unmadeGuess = Array(numWordsAnswer).fill("\0").join(" ");
    const unmadeGuessStatus = Array(numWordsAnswer).fill(GuessStatus.Empty);

    const restOfUnmadeGuesses = Array(numGuessesLeft).fill(unmadeGuess);
    const restOfUnmadeGuessesStatuses =
      Array(numGuessesLeft).fill(unmadeGuessStatus);
    guessesToRender = [...guessesToRender, ...restOfUnmadeGuesses];
    statuses = [...statuses, ...restOfUnmadeGuessesStatuses];
  }

  return (
    <>
      {guessesToRender.map((guess, index, _) => (
        <Guess
          key={index}
          guess={guess.split(" ")}
          statuses={statuses[index]}
        />
      ))}
      <InputGuess onGuess={(guess) => setGuesses((g) => [...g, guess])} />
    </>
  );
}

export default Chorusle;
