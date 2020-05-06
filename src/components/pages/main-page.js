import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products";
import Finances from "./finances";
import ProductList from "./product-list";
import ProductCard from "./product-card";

const MainPage = () => {
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

export default MainPage;
