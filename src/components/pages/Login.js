import React from "react";
import WithAuthorization from "../hoc/WithAuthorization";

function Login({ onClickSignIn, isAuthenticated }) {
  console.log("Is Auth", isAuthenticated);
  return (
    <section className="mainSection__login">
      <div className="formContainer">
        <h2>Login:</h2>
        <form onSubmit={onClickSignIn}>
          <input type="email" placeholder="E-mail" />
          <input type="current-password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default WithAuthorization(Login);
