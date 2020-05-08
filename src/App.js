import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import Pages from "./components/pages";

function App({ RestoService }) {
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div class="leftSideBar">
          <LeftSideMenu />
        </div>
        <div className="mainPageContainer">
          <Pages />
        </div>
      </div>
    </div>
  );
}

export default App;
