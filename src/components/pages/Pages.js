import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import HomePage from "./HomePage";
import "./style.css";

const MainPage = () => {
  return (
    <section className="mainSection">
      <Switch>
        <Route exact path="/">
          <HomePage data="Welcome here!" />
        </Route>
        <Route exact path={`/products/:id`}>
          <ProductList />
        </Route>
        <Route path={`/products/:id/:prId`}>
          <HomePage data="Product Card here" />
        </Route>
        <Route path="/finances/:id">
          <ProductList />
        </Route>
      </Switch>
    </section>
  );
};

export default MainPage;
