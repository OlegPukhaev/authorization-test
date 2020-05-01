//action creators
// export const addUser = (value) => ({ type: "ADD" });
export const signIn = () => ({ type: "SIGN_IN" });
export const signOut = () => ({ type: "SIGN_OUT" });

export const addUser = (value) => {
  return {
    type: "ADD",
    value: value,
  };
};
