import { combineReducers } from "redux";
import lettersReducer from "./lettersReducer";
import gameIsPlayingReducer from "./gameIsPlayingReducer";
import difficultReducer from "./difficultReducer";
import randomLetterReducer from "./randomNumberReducer";
import inputValueReducer from "./inputValueReducer";

export default combineReducers({
  letters: lettersReducer,
  isPlaying: gameIsPlayingReducer,
  difficult: difficultReducer,
  randomNumber: randomLetterReducer,
  inputValue: inputValueReducer
});
