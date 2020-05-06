import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Категории товаров</h1>
      <ul>
        <li>
          <Link to="/products/guitars">Гитары</Link>
        </li>

        <li>
          <Link to="/products/kazans">Казаны</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
