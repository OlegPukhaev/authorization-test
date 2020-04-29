import React from "react";
import { Link } from "react-router-dom";

const Header = ({ fakeAuth }) => {
  return (
    <header className="mainHeader">
      <nav className="mainNavigation">
        <ul className="mainNavigation_items">
          <li className="mainNavigation_item">
            <Link className="linkStyle" to="/login">
              {fakeAuth.isAuthenticated ? "Logout" : "Login"}
            </Link>
          </li>
          <li className="mainNavigation_item">
            <Link className="linkStyle" to="/register">
              Register
            </Link>
          </li>
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
