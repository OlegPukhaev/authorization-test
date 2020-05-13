import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";

const ProductList = () => {
  const { id } = useParams();
  console.log("id", id);
  console.log("useRouteMatch", useRouteMatch());
  return (
    <div className="productContainer">
      <ul className="productListItems">
        <li className="productListItem listItemHeader">List of {id}</li>
        <li className="productListItem">List 1</li>
        <li className="productListItem">List 1</li>
        <li className="productListItem">List 1</li>
        <li className="productListItem">List 1</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
