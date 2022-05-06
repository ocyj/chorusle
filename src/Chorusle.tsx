import _ from "lodash";
import { useState } from "react";
import GuessList from "./chorusle/GuessList";
import InputGuess from "./InputGuess";
import checkGuess from "./utils";
import GuessStatus from "./chorusle/GuessStatusEnum";

interface ChorusleProps {
  answer: string;
  numGuessesAllowed: number;
}

function Chorusle({ answer, numGuessesAllowed }: ChorusleProps) {
  const [guesses, setGuesses] = useState(new Array<string>());
  const correctAnswer = answer.toLowerCase();
  const numWordsAnswer = correctAnswer.split(" ").length;

  let statuses = guesses.map((guess) =>
    checkGuess(correctAnswer, guess.toLowerCase())
  );

  let chorusleBody;

  if (
    statuses.length > 0 &&
    _.every(_.last(statuses), (status) => status === GuessStatus.Correct)
  ) {
    chorusleBody = <div style={{ color: "white" }}>U did good!</div>;
  } else if (guesses.length === numGuessesAllowed) {
    chorusleBody = <div style={{ color: "white" }}>Game Over</div>;
  } else {
    chorusleBody = (
      <>
        <GuessList
          numGuessesAllowed={numGuessesAllowed}
          numWordsAnswer={numWordsAnswer}
          guesses={guesses}
          statuses={statuses}
        />
        <InputGuess onGuess={(guess) => setGuesses((g) => [...g, guess])} />
      </>
    );
  }

  return <>{chorusleBody}</>;
}

export default Chorusle;
