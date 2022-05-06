import Chorusle from "./chorusle/Chorusle";
import "./App.css";

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
