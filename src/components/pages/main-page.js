import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";

const MainPage = () => {
  // console.log("useRouteMatch =>", useRouteMatch());
  // console.log("useParams =>", useParams());
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
