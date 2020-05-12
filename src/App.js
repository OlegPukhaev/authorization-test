import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import Pages from "./components/pages";
import { connect } from "react-redux";
import WithRestoService from "./components/hoc/with-resto-service";
import { menuLoaded } from "./actions/actions";

function App({ RestoService, menuLoaded, menu }) {
  useEffect(() => {
    RestoService.getMenu()
      .then((res) => {
        menuLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log("menu", menu.caregories);
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div className="leftSideBar">
          <LeftSideMenu menu={menu} />
        </div>
        <div className="mainPageContainer">
          <Pages />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("state", state.menu);
  return {
    menu: state.menu,
  };
};

const mapDispatchToProps = {
  menuLoaded,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
