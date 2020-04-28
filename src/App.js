import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import * as actionCreator from "./actions";
// import { bindActionCreators } from "redux";

const fakeAuth = {
  isAuthenticated: false,
};

function App({ userInfo, addUser }) {
  const [data, formDataUpdate] = useState({
    email: "",
    name: "",
    password: "",
  });

  const onChangeUpdateForm = (e) => {
    formDataUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const onClickSubmitForm = (e) => {
    e.preventDefault();
    let newData = {};
    for (let prop in data) {
      newData = { ...newData, [prop]: "" };
    }
    formDataUpdate({ ...data, ...newData });
    console.log("Form:", data);
    addUser(data);
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
              {fakeAuth.isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <Login />
              )}
            </Route>
            <Route path="/register">
              <Register
                onChangeUpdateForm={onChangeUpdateForm}
                onClickSubmitForm={onClickSubmitForm}
                data={data}
              />
            </Route>
            <Route path="/profile">
              {!fakeAuth.isAuthenticated ? (
                <Redirect to="/login" />
              ) : (
                <Profile {...userInfo} />
              )}
              <Profile {...userInfo} />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, actionCreator)(App);
