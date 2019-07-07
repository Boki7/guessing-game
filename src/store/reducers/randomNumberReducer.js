const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case "MY_INT":
      return action.payload.randomNumber;
    case "RESET_GAME":
      return action.payload.randomNumber;
    default:
      return state;
  }
};
