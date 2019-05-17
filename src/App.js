import React from "react";
import "./App.css";
import GuessedWords from "./components/GuessedWord/GuessedWords";
import Congrats from "./components/Congrats/Congrats";

function App() {
  return (
    <div className="container">
      <h1>Word Game</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
