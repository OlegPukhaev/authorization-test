import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import WithRestoService from "../hoc/with-resto-service";
import { productListLoaded } from "../../actions/actions";

const ProductList = ({ RestoService, productListLoaded, products }) => {
  let { catId } = useParams();
  let { url } = useRouteMatch();
  // console.log("url", url);
  // console.log("path", path);
  // console.log("cacId", catId);

  useEffect(() => {
    RestoService.getProductByCatId(catId)
      .then((res) => {
        productListLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("products = by id", products);

  return (
    <section>
      <h1>Список продуктов в категории {catId}</h1>
      <ul>
        <li>
          <Link to={`${url}/1`}>{catId} 1</Link>
          {/* <Link to="/products/guitars/1">Гитары1</Link> */}
        </li>
        <li>
          <Link to={`${url}/2`}>{catId} 2</Link>
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispathcToProps = {
  productListLoaded,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispathcToProps)(ProductList)
);
