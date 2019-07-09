import { store } from "../../index";

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

export const generateRandomNumbers = numbersArray => {
  return {
    type: "GENERATE_RANDOM_NUMBERS",
    payload: numbersArray
  };
};

export const myInt = () => {
  const randomNumbers = store.getState().randomNumber.randomNumbers;
  const randomNumber = randomNumbers.splice(0, 1)[0];
  return {
    type: "MY_INT",
    payload: {
      randomNumber,
      randomNumbers
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
