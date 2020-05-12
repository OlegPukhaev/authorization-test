import React from "react";
import "./style.css";
import { Link, useRouteMatch } from "react-router-dom";

const MenuListItems = ({ item }) => {
  const { url } = useRouteMatch();

  return (
    <li id={item.id} key={`name${item.id}`} className="menyList__items">
      <Link to={`${url}/${item.folder}`}>{item.name}</Link>
    </li>
  );
};

export default MenuListItems;
