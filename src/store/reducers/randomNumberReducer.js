const initialState = {
  randomNumber: "",
  randomNumbers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MY_INT":
      return {
        ...state,
        randomNumber: action.payload.randomNumber,
        randomNumbers: action.payload.randomNumbers
      };
    case "RESET_GAME":
      return initialState;
    case "GENERATE_RANDOM_NUMBERS":
      return {
        ...state,
        randomNumbers: action.payload
      };
    default:
      return state;
  }
};
