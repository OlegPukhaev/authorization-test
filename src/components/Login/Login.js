import React from "react";

function Login() {
  return (
    <section className="mainSection__login">
      <div className="formContainer">
        <h2>Login:</h2>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
