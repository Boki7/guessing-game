import {store} from '../../index';

export const changeDifficult = difficult => {
  return {
    type: "CHANGE_DIFFICULT",
    payload: difficult
  };
};

export const gameStatus = isPlaying => {
  return {
    type: "GAME_STATUS",
    payload: isPlaying
  };
};

const randomNumber = () => {
  return Math.floor(Math.random() * 26 + 1);
};

export const myInt = () => {
  return {
    type: "MY_INT",
    payload: {
      randomNumber: randomNumber()
    }
  };
};

export const resetGame = () => {
  return {
    type: "RESET_GAME",
    payload: {
      randomNumber: ""
    }
  };
};

export const checkAnswer = () => {
  const inputValue = store.getState().inputValue;
  return {
    type: "CHECK_ANSWER",
    payload: inputValue
  };
};

export const checkAnswerAuto = () => {
  const inputValue = store.getState().inputValue;
  return {
    type: "CHECK_ANSWER_AUTO",
    payload: inputValue
  };
};



export const inputValue = value => {
  return {
    type: "INPUT_VALUE",
    payload: value
  };
};

export const correctAnswer = letter => {
  return {
    type: "CORRECT_ANSWER",
    payload: letter
  };
};
