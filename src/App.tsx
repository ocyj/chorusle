import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chorusle from "./Chorusle";

function App() {
  const answer = "One Two Three Four";

  return (
    <>
      <h1 className="app-header">CHORUSLE</h1>
      <Chorusle answer={answer} numGuessesAllowed={6} />
    </>
  );
}

export default App;
