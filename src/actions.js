//action creators
// export const addUser = (value) => ({ type: "ADD" });
export const addUser = (value) => {
  console.log("Actin add. value", value);
  return {
    type: "ADD",
    value: value,
  };
};
