import React from "react";
import "./style.css";
import MenyListItems from "../MenuListItems";
import { Route, Switch, Redirect } from "react-router-dom";

const LeftSideMenu = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products">
          <ul className="menuList">
            <MenyListItems name="Гитары" />
            <MenyListItems name="Казаны" />
            <MenyListItems name="Афганские казаны" />
            <MenyListItems name="Шуруповерты" />
            <MenyListItems name="Палатки" />
          </ul>
        </Route>
        <Route exact path="/finances">
          <ul className="menuList">
            <MenyListItems name="Отчет" />
            <MenyListItems name="Прогноз" />
            <MenyListItems name="Баланс" />
          </ul>
        </Route>
        <Route path="*">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </div>
  );
};

export default LeftSideMenu;
