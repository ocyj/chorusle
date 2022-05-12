import { SyntheticEvent, useState } from "react";
import "./InputGuess.css";

interface InputGuessProps {
  onGuess: (guess: string) => void;
}

function InputGuess({ onGuess }: InputGuessProps) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [validGuess, setValidGuess] = useState(false);
  const handleOnSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isValidGuess(currentGuess)) {
      onGuess(currentGuess);
      setValidGuess(false);
      setCurrentGuess("");
    }
  };
  const handleOnChange = (event: any) => {
    const newGuess = event.target.value;
    setValidGuess(isValidGuess(newGuess));
    setCurrentGuess(newGuess);
  };
  function isValidGuess(guess: string): boolean {
    if (guess.length === 0) {
      return false;
    }
    // only allow letters and spaces:
    return /^[A-Za-z'\s]*$/.test(guess);
  }

  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input
        className="text-input"
        type="text"
        placeholder="Put your guess here..."
        onChange={handleOnChange}
        value={currentGuess}
      />
      <button className="button" disabled={!validGuess}>
        Guess!
      </button>
    </form>
  );
}

export default InputGuess;
