import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onClickSignOut }) => {
  return (
    <header className="mainHeader">
      <h1>Products Page</h1>
      <nav className="mainNavigation">
        <ul className="mainNavigation_items">
          <li className="mainNavigation_item">
            <Link className="linkStyle" to="/products">
              Товары
            </Link>
          </li>
          <li className="mainNavigation_item">
            <Link className="linkStyle" to="/finances">
              Финансы
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
