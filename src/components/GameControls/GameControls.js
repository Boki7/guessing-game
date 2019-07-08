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

const GameControls = ({
  isPlaying,
  gameStatus,
  resetGame,
  inputValue,
  checkAnswer,
  value
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
      {isPlaying ? <RandomNumber /> : <h1>0</h1>}
      <Input type="text" disabled={!isPlaying} onChange={handleOnChange} value={value}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPlaying: state.isPlaying,
    value: state.inputValue
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
