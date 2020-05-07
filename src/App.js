import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/pages/main-page";
// import WithRestoService from "./components/hoc/with-resto-service";

function App({ RestoService }) {
  // console.log(RestoService.getMenuItems());

  // RestoService.getProductCategories().then((res) =>
  //   console.log("Get responce: ", res)
  // );

  return (
    <div className="mainContainer">
      <Header />
      <MainPage />
    </div>
  );
}

// export default WithRestoService()(App);
export default App;
