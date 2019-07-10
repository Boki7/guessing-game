const initialState = {
  isPlaying: false,
  gameEnd: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_GAME": {
      return initialState
    }
    case "GAME_STATUS":
      return {
        ...state,
        isPlaying: action.payload
      }
    case "MY_INT":
      if(!action.payload.randomNumber){
        return {
          ...state,
          gameEnd: true
        }
      }
      return state;
    default:
      return state;
  }
};
