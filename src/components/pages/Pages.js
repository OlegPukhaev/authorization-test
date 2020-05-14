import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import HomePage from "./HomePage";
import "./style.css";
import { connect } from "react-redux";

const MainPage = ({ products, categories }) => {
  return (
    <section className="mainSection">
      <Switch>
        <Route exact path="/">
          <HomePage data="Welcome here!" />
        </Route>
        <Route exact path={`/products/:id`}>
          <ProductList products={products} categories={categories} />
        </Route>
        <Route path={`/products/:id/:productId`}>
          <ProductCard products={products} />
        </Route>
        <Route path="/finances/:id">
          <ProductList />
        </Route>
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.menu.categories,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
