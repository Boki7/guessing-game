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
      return (
        <Button
          title="Stop"
          click={() => gameStatus(false)}
          classes="btn btn-stop"
        />
      );
    }
    resetGame();
    return (
      <Button
        title="Start Game"
        click={() => gameStatus(true)}
        classes="btn btn-start"
      />
    );
  };

  const handleOnChange = event => {
    inputValue(event.target.value);
    checkAnswer();
  };

  return (
    <div className="game-controls">
      <DifficultList />
      {renderButton()}
      <div className="game-controls-random-number">
        {isPlaying ? <RandomNumber /> : <h1 className="game-controls-initial-number">0</h1>}
      </div>
      <Input
        type="text"
        disabled={!isPlaying}
        onChange={handleOnChange}
        value={value}
        attachClass="game-controls-input"
        placeholder="Input Letter"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPlaying: state.isPlaying.isPlaying,
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
