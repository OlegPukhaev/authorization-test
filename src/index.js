import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
import MyContext from "./components/Context";

ReactDOM.render(
  <Provider store={store}>
    <MyContext.Provider value={{ name: "Dimon", email: "dimon@gmail.com" }}>
      <App />
    </MyContext.Provider>
  </Provider>,
  document.getElementById("root")
);
