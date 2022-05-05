import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chorusle from "./Chorusle";

function App() {
  const answer = "One Two Three Four";
  const guesses: Array<string> = [];

  return (
    <>
      <h1 className="app-header">CHORUSLE</h1>
      <Chorusle
        answer={answer}
        initialGuesses={guesses}
        numGuessesAllowed={6}
      />
    </>
  );
}

export default App;
