import React from "react";

function Register({ onChangeUpdateForm, onClickSubmitForm, data }) {
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
            value={data.email}
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChangeUpdateForm}
            value={data.name}
          />
          <input
            name="password"
            type="current-password"
            placeholder="Password"
            onChange={onChangeUpdateForm}
            value={data.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
