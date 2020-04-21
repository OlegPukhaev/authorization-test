import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <header className="mainHeader">
        <h1>Header</h1>
      </header>
      <section className="mainSection">
        <section className="mainSection__login">
          <div className="loginForm">
            <h2>Login:</h2>
            <form>
              <input type="text" placeholder="User" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </section>
        {/* <section className="mainSection__register"></section> */}
        {/* <section className="mainSection__profile"></section> */}
      </section>
    </div>
  );
}

export default App;
