import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";

const MainPage = () => {
  return (
    <section className="mainSection">
      <Switch>
        <Route path={`products`} />
        <Route path={`/products/:id`}>
          <ProductList />
        </Route>
        <Route path="/finances/:id">
          <ProductList />
        </Route>
      </Switch>
    </section>
  );
};

export default MainPage;
