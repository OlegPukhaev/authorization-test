import React from "react";
import { Switch, Link, useRouteMatch } from "react-router-dom";

const ProductCategories = ({ categories }) => {
  let { url } = useRouteMatch();
  return (
    <>
      <h1>Категории товаров</h1>
      <ul className="menuList">
        {categories.map((item) => {
          return (
            <li className="menuList__item" key={`cat${item.id}`}>
              <Link
                id={item.id}
                className="menuList__link"
                to={`${url}/${item.id}`}
              >
                {item.name} 20шт.
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductCategories;
