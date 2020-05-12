import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Products from "./products";
// import Finances from "./finances";

const MainPage = ({ loading }) => {
  return (
    <section className="mainSection">
      <h1>Main Section</h1>
      {/* <Switch>
        <Route exact path="/" />
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/finances">
          <Finances />
        </Route>
      </Switch> */}
    </section>
  );
};

export default MainPage;
