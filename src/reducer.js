const initialState = {
  userInfo: {
    name: "Oleg",
    email: "oleg@gmail.com",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

const reducer = (state = initialState, action) => {
  console.log("action here", action);
  const { value } = action;
  switch (action.type) {
    case "ADD":
      const newObject = {
        ...state.userInfo,
        name: value.name,
        email: value.email,
      };
      return (state = {
        ...state,
        userInfo: newObject,
      });
    default:
      return state;
  }
};

export default reducer;
