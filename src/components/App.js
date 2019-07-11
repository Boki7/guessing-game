import React from "react";
import GameControls from "./GameControls/GameControls";
import LetterList from "./GuessingList/Letters/LetterList/LetterList";
import Scoring from "./Scoring/Scoring";
import './App.css';

const App = () => {
  return (
    <div>
      <div className="game-controls-scoring-container">
        <GameControls />
        <Scoring />
      </div>
      <div className="letter-list-container">
        <LetterList />
      </div>
    </div>
  );
};

export default App;
