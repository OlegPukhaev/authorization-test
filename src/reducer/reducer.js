import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "RND":
      return (state = action.value);
    default:
      return state;
  }
};

//action creators
const inc = () => ({ type: "INC" });
const rnd = (value) => ({ type: "RND", value });

const store = createStore(reducer);

const someValue = 33;

store.dispatch(inc());
store.dispatch(rnd(someValue));

const update = () => {
  document.getElementById("counter").textContent = store.getState();
};

store.subscribe(update); //вызываем функцию update() когда обновился store
