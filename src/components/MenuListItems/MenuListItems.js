import React from "react";
import "./style.css";
import { Link, useRouteMatch } from "react-router-dom";

const MenuListItems = ({ item }) => {
  const { path, url } = useRouteMatch();
  console.log("path", path, url);
  return (
    <li id={item.id} key={`name${item.id}`} className="menyList__items">
      <Link to={`${path}/${item.folder}`}>{item.name}</Link>
    </li>
  );
};

export default MenuListItems;
