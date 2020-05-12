import React from "react";
import "./style.css";
import MenyListItems from "../MenuListItems";

const LeftSideMenu = () => {
  return (
    <div className="container">
      <ul className="menuList">
        <MenyListItems name="Гитары" />
        <MenyListItems name="Казаны" />
        <MenyListItems name="Афганские казаны" />
        <MenyListItems name="Шуруповерты" />
        <MenyListItems name="Палатки" />
      </ul>
    </div>
  );
};

export default LeftSideMenu;
