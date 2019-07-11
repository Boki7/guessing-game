const initialState = {
  difficult: "medium",
  timeout: 3500
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DIFFICULT":
      switch (action.payload) {
        case "easy":
          return {
            ...state,
            difficult: action.payload,
            timeout: 5000
          };
        case "medium":
          return {
            ...state,
            difficult: action.payload,
            timeout: 3500
          };
        case "hard":
          return {
            ...state,
            difficult: action.payload,
            timeout: 2000
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
