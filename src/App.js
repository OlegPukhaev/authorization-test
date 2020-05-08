import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import MainPage from "./components/pages/main-page";

function App({ RestoService }) {
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div class="leftSideBar">
          <LeftSideMenu />
        </div>
        <div className="mainPageContainer">
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
