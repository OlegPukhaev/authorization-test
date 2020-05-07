import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products";
import Finances from "./finances";
import ProductList from "./product-list";
import ProductCard from "./product-card";
import { connect } from "react-redux";

const MainPage = ({ loading }) => {
  return (
    <section className="mainSection">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/finances">
          <Finances />
        </Route>
        <Route exact path="/products/:catId/">
          <ProductList />
        </Route>
        <Route path="/products/:catId/:productId">
          <ProductCard />
        </Route>
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MainPage);
