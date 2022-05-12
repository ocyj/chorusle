import Chorusle from "./chorusle/Chorusle";
import "./App.css";
import { useState } from "react";

import data from "./choruses.json";
console.log(data);

const choruses: Array<string> = data.choruses;
// const choruses = ["one two three four"];

const getRandomChorus = () =>
  choruses[Math.floor(Math.random() * choruses.length)];

function App() {
  const [id, setId] = useState(0);
  const [answer, setAnswer] = useState(getRandomChorus());
  return (
    <>
      <h1 className="app-header">CHORUSLE</h1>
      <Chorusle
        key={id}
        answer={answer}
        numGuessesAllowed={6}
        onRestart={() => {
          setId((id) => id + 1);
          setAnswer(getRandomChorus());
        }}
      />
    </>
  );
}

export default App;
