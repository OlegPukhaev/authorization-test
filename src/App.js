import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "./actions";
// import { bindActionCreators } from "redux";

function App() {
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
                data={data}
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

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(App);
