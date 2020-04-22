import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, formDataUpdate] = useState({});

  const onChangeUpdateForm = (e) => {
    formDataUpdate({ ...data, [e.target.name]: e.target.value });
    // console.log("Some data", data);
  };

  const onClickSubmitForm = (e) => {
    e.preventDefault();
    console.log("submit Data", data);
  };

  return (
    <Router>
      <div className="mainContainer">
        <header className="mainHeader">
          <h1>Header</h1>
          <nav className="mainNavigation">
            <ul className="mainNavigation_items">
              <li className="mainNavigation_item">
                <Link className="linkStyle" to="/login">
                  Login
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
        <section className="mainSection">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register
                onChangeUpdateForm={onChangeUpdateForm}
                onClickSubmitForm={onClickSubmitForm}
              />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
