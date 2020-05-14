import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Spinner from "../../spinner";
import "./style.css";

const ProductList = ({ products, categories }) => {
  const { id } = useParams();
  const { url } = useRouteMatch();

  if (!products && !categories) return <Spinner />;

  const cat = categories.find((item) => item.id === parseInt(id));

  return (
    <div className="productContainer">
      <ul className="productListItems">
        <li className="productListItem listItemHeader">
          {cat ? cat.name : null}
        </li>
        {products
          .filter((item) => item.catId === parseInt(id))
          .map((item) => {
            return (
              <li key={`listItem${item.id}`} className="productListItem">
                <Link to={`${url}/${item.id}`}>
                  {item.name} {item.model} {item.color} {item.size}{" "}
                  {item.priceRozn}руб.
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
export default ProductList;
