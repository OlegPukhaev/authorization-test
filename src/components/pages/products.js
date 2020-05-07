import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import WithRestoService from "../hoc/with-resto-service";
import {
  productCategoriesLoaded,
  productListLoaded,
} from "../../actions/actions";
import "./style.css";

const Products = ({
  RestoService,
  productCategoriesLoaded,
  productListLoaded,
  categories,
  products,
}) => {
  let { url } = useRouteMatch();
  console.log("products", products);

  useEffect(() => {
    RestoService.getProductCategories()
      .then((res) => {
        productCategoriesLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    RestoService.getProductList()
      .then((res) => {
        productListLoaded(res);
      })
      .catch((err) => {
        console.log("Some error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };
};

const mapDispatchToProps = {
  productCategoriesLoaded,
  productListLoaded,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);
