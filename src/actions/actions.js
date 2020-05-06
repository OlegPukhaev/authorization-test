//action creators
// export const addUser = (value) => ({ type: "ADD" });
const signIn = () => ({ type: "SIGN_IN" });
const signOut = () => ({ type: "SIGN_OUT" });

const addUser = (value) => {
  return {
    type: "ADD",
    payload: value,
  };
};

const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};
const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

export { menuLoaded, menuRequested, addUser, signIn, signOut };
