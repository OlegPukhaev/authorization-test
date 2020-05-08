import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import WithRestoService from "../hoc/with-resto-service";
import {
  productCategoriesLoaded,
  productListLoaded,
  productRequested,
} from "../../actions/actions";
import "./style.css";
import ProductList from "./product-list";
import ProductCard from "./product-card";
import ProductCategories from "./product-categories";

const Products = ({
  RestoService,
  productCategoriesLoaded,
  productListLoaded,
  productRequested,
  categories,
  products,
  loading,
}) => {
  let { url } = useRouteMatch();
  // console.log("products", products);

  useEffect(() => {
    productRequested();
    RestoService.getProductCategories()
      .then((res) => {
        productCategoriesLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <section>Loadin in progress...</section>;

  return (
    <section>
      <Switch>
        <Route exact path="/products/">
          <ProductCategories />
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
    categories: state.categories,
    products: state.products,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  productCategoriesLoaded,
  productListLoaded,
  productRequested,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);
