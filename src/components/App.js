import React from "react";
import GameControls from "./GameControls/GameControls";
import LetterList from "./GuessingList/Letters/LetterList/LetterList";
import Scoring from "./Scoring/Scoring";

const App = () => {
  return (
    <div>
      <GameControls />
      <LetterList />
      <Scoring />
    </div>
  );
};

export default App;
