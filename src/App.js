import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/pages/main-page";

function App({ RestoService }) {
  return (
    <div className="mainContainer">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
