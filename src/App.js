import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/pages/main-page";
import WithRestoService from "./components/hoc/with-resto-service";

function App({ RestoService }) {
  console.log(RestoService.getMenuItems());
  return (
    <div className="mainContainer">
      <Header />
      <MainPage />
    </div>
  );
}

export default WithRestoService()(App);
