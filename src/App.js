import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="mainContainer">
      <header className="mainHeader">
        <h1>Header</h1>
        <nav className="mainNavigation">
          <ul className="mainNavigation_items">
            <li className="mainNavigation_item">Login</li>
            <li className="mainNavigation_item">Register</li>
            <li className="mainNavigation_item">Profile</li>
          </ul>
        </nav>
      </header>
      <section className="mainSection">
        <Login />
        <Register />
        <Profile />
      </section>
    </div>
  );
}

export default App;
