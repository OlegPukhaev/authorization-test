import React from "react";
import "./style.css";
import MenyListItems from "../MenuListItems";
import { Route, Switch } from "react-router-dom";

const LeftSideMenu = ({ menu }) => {
  const { categories, finMenu } = menu;
  return (
    <div className="container">
      <Switch>
        <Route path="/products">
          <ul className="menuList">
            {categories.map((item) => (
              <MenyListItems key={`categories${item.id}`} item={item} />
            ))}
          </ul>
        </Route>
        <Route path="/finances">
          <ul className="menuList">
            {finMenu.map((item) => (
              <MenyListItems key={`finmenu${item.id}`} item={item} />
            ))}
          </ul>
        </Route>
      </Switch>
    </div>
  );
};

export default LeftSideMenu;
