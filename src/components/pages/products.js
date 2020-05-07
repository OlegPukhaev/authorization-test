import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import WithRestoService from "../hoc/with-resto-service";
import {
  productCategoriesLoaded,
  productListLoaded,
  productRequested,
} from "../../actions/actions";
import "./style.css";

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
      <h1>Категории товаров</h1>
      <ul className="menuList">
        {categories.map((item) => {
          return (
            <li className="menuList__item" key={`cat${item.id}`}>
              <Link
                id={item.id}
                className="menuList__link"
                to={`${url}/${item.id}`}
              >
                {item.name} 20шт.
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
