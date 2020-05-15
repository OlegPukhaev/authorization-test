import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import Pages from "./components/pages";
import { connect } from "react-redux";
import WithRestoService from "./components/hoc/with-resto-service";
import { menuLoaded, productListLoaded } from "./actions/actions";

import style from "./App.module.sass";
// import "./app.sass";

function App({ RestoService, menuLoaded, productListLoaded, menu }) {
  useEffect(() => {
    RestoService.getMenu()
      .then((res) => {
        menuLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    RestoService.getProductList()
      .then((res) => {
        productListLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.contentContainer}>
        <div className={style.leftSideBar}>
          <LeftSideMenu menu={menu} />
        </div>
        <div className={style.mainPageContainer}>
          <Pages />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

const mapDispatchToProps = {
  menuLoaded,
  productListLoaded,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
