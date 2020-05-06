import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Products = () => {
  let { url, path } = useRouteMatch();
  return (
    <section>
      <h1>Категории товаров</h1>
      <ul>
        <li>
          <Link to={`${url}/guitars`}>Гитары</Link>
        </li>

        <li>
          <Link to={`${url}/kazans`}>Казаны</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
