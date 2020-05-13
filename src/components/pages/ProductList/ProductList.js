import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";

const ProductList = ({ products, categories }) => {
  const { id } = useParams();

  if (!products && !categories)
    return <div className="productContainer">Loading...</div>;

  const cat = categories.find((item) => item.id === parseInt(id));

  return (
    <div className="productContainer">
      <ul className="productListItems">
        <li className="productListItem listItemHeader">
          {cat ? cat.name : null}
        </li>
        {products
          .filter((item) => item.catId === parseInt(id))
          .map((item) => {
            return (
              <li key={`listItem${item.id}`} className="productListItem">
                {item.name} {item.model} {item.color} {item.size}{" "}
                {item.priceRozn}руб.
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.menu.categories,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
