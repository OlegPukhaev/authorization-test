import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import WithRestoService from "../hoc/with-resto-service";
import { productListLoaded, productRequested } from "../../actions/actions";

const ProductList = ({
  RestoService,
  productListLoaded,
  products,
  productRequested,
  loading,
}) => {
  let { catId } = useParams();
  let { url } = useRouteMatch();

  useEffect(() => {
    productRequested();
    RestoService.getProductByCatId(catId)
      .then((res) => {
        productListLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <section>Loadin in progress...</section>;

  return (
    <section>
      <h1>Список продуктов в категории {catId}</h1>
      <ul className="menuList">
        {products.map((item) => {
          return (
            <li
              className="menuList__item"
              key={`cat${item.id}`}
              key={`product${item.id}`}
            >
              <Link className="menuList__link" to={`${url}/${item.id}`}>
                {item.name} - {item.size} - {item.priceRozn}руб.
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
  };
};

const mapDispathcToProps = {
  productListLoaded,
  productRequested,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispathcToProps)(ProductList)
);
