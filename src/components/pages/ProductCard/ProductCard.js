import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Spinner from "../../spinner/spinner";

const ProductCard = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) return <Spinner />;

  return (
    <div className="productCardWrapper">
      <ul className="productCardList">
        <li className="listItemHeader">{product.name}</li>
        <li>
          <span className="itemName">Model:</span> {product.model}
        </li>
        <li>
          <span className="itemName">Color:</span> {product.colorName}
        </li>
        <li>
          <span className="itemName">Оптовая цена:</span> {product.priceOpt}
        </li>
        <li>
          <span className="itemName">Розничная цена:</span> {product.priceRozn}
        </li>
        <li>
          <span className="itemName">Количество:</span> {product.count}
        </li>
        <li>
          <span className="itemName">Description:</span>{" "}
          <p>{product.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
