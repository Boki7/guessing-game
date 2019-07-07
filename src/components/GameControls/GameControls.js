import React from "react";
import DifficultList from "./DifficultList/DifficultList";
import Button from "./Button/Button";
import RandomNumber from "./RandomNumber/RandomNumber";
import Input from "./Input/Input";
import { connect } from "react-redux";
import {
  gameStatus,
  resetGame,
  inputValue,
  checkAnswer
} from "../../store/actions/index";

import "./GameControls.css";
let timer;

const GameControls = ({
  isPlaying,
  gameStatus,
  resetGame,
  inputValue,
  checkAnswer
}) => {
  const renderButton = () => {
    if (isPlaying) {
      return <Button title="Stop" click={() => gameStatus(false)} />;
    }
    resetGame();
    return <Button title="Start Game" click={() => gameStatus(true)} />;
  };

  const handleOnChange = event => {
    inputValue(event.target.value);
    checkAnswer();
  };

  return (
    <div className="game-controls">
      <DifficultList />
      {renderButton()}
      {isPlaying ? <RandomNumber /> : null}
      <Input type="text" disabled={!isPlaying} onChange={handleOnChange} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPlaying: state.isPlaying
  };
};

export default connect(
  mapStateToProps,
  {
    gameStatus,
    resetGame,
    inputValue,
    checkAnswer
  }
)(GameControls);
