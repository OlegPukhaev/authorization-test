import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products";
import Finances from "./finances";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MainPage);
