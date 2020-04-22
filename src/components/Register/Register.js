import React from "react";

function Register({ onChangeUpdateForm, onClickSubmitForm }) {
  return (
    <section className="mainSection__register">
      <div className="formContainer">
        <h2>Login:</h2>
        <form onSubmit={onClickSubmitForm}>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={onChangeUpdateForm}
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChangeUpdateForm}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangeUpdateForm}
          />
          <input
            name="password-c"
            type="new-password"
            placeholder="Confirm password"
            onChange={onChangeUpdateForm}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
