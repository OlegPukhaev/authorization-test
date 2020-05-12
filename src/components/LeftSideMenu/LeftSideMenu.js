import React from "react";
import "./style.css";
import MenyListItems from "../MenuListItems";
import { Route, Switch, Redirect } from "react-router-dom";

const LeftSideMenu = ({ menu }) => {
  const { categories, finMenu } = menu;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products">
          <ul className="menuList">
            {categories.map((item) => (
              <MenyListItems name={item.name} key={`list${item.id}`} />
            ))}
          </ul>
        </Route>
        <Route exact path="/finances">
          <ul className="menuList">
            {finMenu.map((item) => (
              <MenyListItems name={item.name} key={`list${item.id}`} />
            ))}
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
