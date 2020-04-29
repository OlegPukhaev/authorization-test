import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Header from "./components/Header";

import * as actionCreator from "./actions";

function App({ userInfo, addUser, isAuthenticated, signIn, signOut }) {
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
    addUser(data);
    signIn();
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    signIn();
  };

  const onClickSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Router>
      <div className="mainContainer">
        <Header
          isAuthenticated={isAuthenticated}
          onClickSignOut={onClickSignOut}
        />
        <section className="mainSection">
          <Switch>
            <Route path="/login">
              {isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <Login onClickSignIn={onClickSignIn} />
              )}
            </Route>
            <Route path="/register">
              {isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <Register
                  onChangeUpdateForm={onChangeUpdateForm}
                  onClickSubmitForm={onClickSubmitForm}
                  data={data}
                />
              )}
            </Route>
            <Route path="/profile">
              {!isAuthenticated ? (
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
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, actionCreator)(App);
