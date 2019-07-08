const initialState = {
  letters: {
    1: { letter: "a", number: 1, correct: "none" },
    2: { letter: "b", number: 2, correct: "none" },
    3: { letter: "c", number: 3, correct: "none" },
    4: { letter: "d", number: 4, correct: "none" },
    5: { letter: "e", number: 5, correct: "none" },
    6: { letter: "f", number: 6, correct: "none" },
    7: { letter: "g", number: 7, correct: "none" },
    8: { letter: "h", number: 8, correct: "none" },
    9: { letter: "i", number: 9, correct: "none" },
    10: { letter: "j", number: 10, correct: "none" },
    11: { letter: "k", number: 11, correct: "none" },
    12: { letter: "l", number: 12, correct: "none" },
    13: { letter: "m", number: 13, correct: "none" },
    14: { letter: "n", number: 14, correct: "none" },
    15: { letter: "o", number: 15, correct: "none" },
    16: { letter: "p", number: 16, correct: "none" },
    17: { letter: "q", number: 17, correct: "none" },
    18: { letter: "r", number: 18, correct: "none" },
    19: { letter: "s", number: 19, correct: "none" },
    20: { letter: "t", number: 20, correct: "none" },
    21: { letter: "u", number: 21, correct: "none" },
    22: { letter: "v", number: 22, correct: "none" },
    23: { letter: "w", number: 23, correct: "none" },
    24: { letter: "x", number: 24, correct: "none" },
    25: { letter: "y", number: 25, correct: "none" },
    26: { letter: "z", number: 26, correct: "none" }
  },
  pickedLetter: "",
  answer: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MY_INT":
      return {
        ...state,
        pickedLetter: Object.values(state.letters).filter(letter => {
          return letter.number === action.payload.randomNumber;
        })
      };
    case "RESET_GAME":
      return initialState;


    case "INPUT_VALUE":
      return {
        ...state,
        answer: action.payload
      };

    case "CHECK_ANSWER_AUTO":
      if(action.payload.length === 0){
        return {
          ...state,
          letters: {
            ...state.letters,
            [state.pickedLetter[0].number]: {
              ...state.letters[state.pickedLetter[0].number],
              correct: "wrong"
            }
          }
        };
      }
      return state;

      
    case "CHECK_ANSWER":
      if (state.pickedLetter[0] && state.answer) {
        if (state.pickedLetter[0].letter === state.answer) {
          return {
            ...state,
            letters: {
              ...state.letters,
              [state.pickedLetter[0].number]: {
                ...state.letters[state.pickedLetter[0].number],
                correct: "correct"
              }
            }
          };
        } else if (action.payload.length > 0) {
          return {
            ...state,
            letters: {
              ...state.letters,
              [state.pickedLetter[0].number]: {
                ...state.letters[state.pickedLetter[0].number],
                correct: "wrong"
              }
            }
          };
        }
      }
      return state;

    default:
      return state;
  }
};
