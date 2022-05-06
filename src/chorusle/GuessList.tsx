import { GuessStatus } from "../utils";
import Guess from "../Guess";

interface GuessListProps {
  numGuessesAllowed: number;
  numWordsAnswer: number;
  guesses: Array<string>;
  statuses: Array<Array<GuessStatus>>;
}

function GuessList({
  numGuessesAllowed,
  numWordsAnswer,
  guesses,
  statuses,
}: GuessListProps) {
  const numGuessesLeft = numGuessesAllowed - guesses.length;
  let guessesToRender = [...guesses];
  let statusesToRender = [...statuses];
  if (numGuessesLeft > 0) {
    const unmadeGuess = Array(numWordsAnswer).fill("\0").join(" ");
    const unmadeGuessStatus = Array(numWordsAnswer).fill(GuessStatus.Empty);

    const restOfUnmadeGuesses = Array(numGuessesLeft).fill(unmadeGuess);
    const restOfUnmadeGuessesStatuses =
      Array(numGuessesLeft).fill(unmadeGuessStatus);
    guessesToRender = [...guessesToRender, ...restOfUnmadeGuesses];
    statusesToRender = [...statusesToRender, ...restOfUnmadeGuessesStatuses];
  }
  return (
    <>
      {guessesToRender.map((guess, index, _) => (
        <Guess
          key={index}
          guess={guess.split(" ")}
          statuses={statusesToRender[index]}
        />
      ))}
    </>
  );
}

export default GuessList;
