const initialState = {
  isLoggedIn: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
