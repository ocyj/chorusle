import { useState } from "react";
import _ from "lodash";

import GuessList from "./GuessList";
import InputGuess from "./InputGuess";
import checkGuess from "./utils";
import GuessStatus from "./GuessStatusEnum";
import Modal from "./Modal";

interface ChorusleProps {
  answer: string;
  numGuessesAllowed: number;
  onRestart: () => void;
}

function Chorusle({ answer, numGuessesAllowed, onRestart }: ChorusleProps) {
  const [guesses, setGuesses] = useState(new Array<string>());
  //const [showModal, setShowModal] = useState(false);

  const correctAnswer = answer.toLowerCase();
  const numWordsAnswer = correctAnswer.split(" ").length;

  let statuses = guesses.map((guess) =>
    checkGuess(correctAnswer, guess.toLowerCase())
  );

  let gameStatus = undefined;
  let modalHeader = "";

  if (
    statuses.length > 0 &&
    _.every(_.last(statuses), (status) => status === GuessStatus.Correct)
  ) {
    gameStatus = "won";
    modalHeader = "Good job!";
    //setShowModal(true);
  } else if (guesses.length === numGuessesAllowed) {
    gameStatus = "lost";
    modalHeader = "Game over";
    //setShowModal(true);
  }

  let chorusleBody = (
    <>
      <GuessList
        numGuessesAllowed={numGuessesAllowed}
        numWordsAnswer={numWordsAnswer}
        guesses={guesses}
        statuses={statuses}
      />
      <InputGuess onGuess={(guess) => setGuesses((g) => [...g, guess])} />
      <Modal
        show={gameStatus !== undefined}
        header={modalHeader}
        onClose={onRestart}
      >
        !
      </Modal>
    </>
  );

  return <>{chorusleBody}</>;
}

export default Chorusle;
