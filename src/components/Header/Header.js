import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onClickSignOut }) => {
  return (
    <header className="mainHeader">
      <h1>Header</h1>
      <nav className="mainNavigation">
        <ul className="mainNavigation_items">
          <li className="mainNavigation_item">
            <Link
              className="linkStyle"
              to="/login"
              onClick={isAuthenticated ? onClickSignOut : null}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </Link>
          </li>
          {!isAuthenticated ? (
            <li className="mainNavigation_item">
              <Link className="linkStyle" to="/register">
                Register
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="mainNavigation_item">
            <Link className="linkStyle" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
