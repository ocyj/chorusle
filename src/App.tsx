import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chorusle from "./Chorusle";

function App() {
  const answer = "One Two Three Four";
  const guesses = ["En Two Tre Four", "One Två Three Fyra"];

  return (
    <>
      <h1 className="app-header">CHORUSLE</h1>
      <Chorusle answer={answer} guesses={guesses} />
    </>
  );
}

export default App;
