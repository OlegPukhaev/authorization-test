import React from "react";
import { Link } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router-dom";

const ProductList = () => {
  let { catId } = useParams();
  let { url, path } = useRouteMatch();
  console.log("url", url);
  console.log("path", path);
  return (
    <section>
      <h1>Список продуктов в категории {catId}</h1>
      <ul>
        <li>
          <Link to={`${url}/1`}>{catId} 1</Link>
          {/* <Link to="/products/guitars/1">Гитары1</Link> */}
        </li>
        <li>
          <Link to={`${url}/2`}>{catId} 2</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProductList;
