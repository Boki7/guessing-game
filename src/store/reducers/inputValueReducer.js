const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return action.payload;
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
