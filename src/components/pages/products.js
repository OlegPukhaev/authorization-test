import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import WithRestoService from "../hoc/with-resto-service";
import { productCategoriesLoaded } from "../../actions/actions";
import "./style.css";

const Products = ({ RestoService, productCategoriesLoaded, categories }) => {
  let { url } = useRouteMatch();

  useEffect(() => {
    RestoService.getProductCategories()
      .then((res) => {
        productCategoriesLoaded(res);
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
              <Link id={item.id} to={`${url}/guitars`}>
                {item.name}
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
  };
};

const mapDispatchToProps = {
  productCategoriesLoaded,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);
