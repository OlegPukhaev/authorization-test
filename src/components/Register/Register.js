import React from "react";

function Register() {
  return (
    <section className="mainSection__register">
      <div className="formContainer">
        <h2>Login:</h2>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="new-password" placeholder="Confirm password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
