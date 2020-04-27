import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);
const { dispatch } = store;

// const { inc, dec } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
