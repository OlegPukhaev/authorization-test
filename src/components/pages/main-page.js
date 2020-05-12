import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import ProductList from "./ProductList";

const MainPage = ({ loading }) => {
  return (
    <section className="mainSection">
      <Switch>
        <Route path="/products/:id">
          <ProductList />
        </Route>
        <Route path="/finances">
          <h1>Finances</h1>
        </Route>
      </Switch>
    </section>
  );
};

export default MainPage;
