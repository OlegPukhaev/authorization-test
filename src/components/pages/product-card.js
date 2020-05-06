import React from "react";
import { useParams } from "react-router-dom";
const ProductCard = () => {
  let { catId, productId } = useParams();
  return (
    <section>
      <h1>
        Карточка продукта {catId}: {productId}
      </h1>
    </section>
  );
};

export default ProductCard;
