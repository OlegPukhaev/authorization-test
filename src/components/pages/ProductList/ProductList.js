import React from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Page of {id}</h1>
      <ul>
        <li>List 1</li>
        <li>List 1</li>
        <li>List 1</li>
        <li>List 1</li>
      </ul>
    </div>
  );
};

export default ProductList;
