const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case "GAME_STATUS":
      return action.payload;
    default:
      return state;
  }
};
