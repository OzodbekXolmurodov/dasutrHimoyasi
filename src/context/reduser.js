export const initialState = {
  token: localStorage.getItem("stroge")
    ? JSON.parse(localStorage.getItem("stroge")).token
    : null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      const newState = { ...state, token: action.payload };
      localStorage.setItem("stroge", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
