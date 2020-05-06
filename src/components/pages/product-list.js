import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductList = () => {
  let { catId } = useParams();
  // console.log("Props Id", id);
  console.log("Topic ID", catId);
  return (
    <section>
      {/* <h1>Список продуктов в категории {id}</h1> */}
      <h1>Список продуктов в категории {catId}</h1>
      <ul>
        <li>
          <Link to="/products/guitars/1">Гитары1</Link>
        </li>
        <li>
          <Link to="/products/guitars/2">Гитары2</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProductList;
