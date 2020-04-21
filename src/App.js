import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <header className="mainHeader">
        <h1>Header</h1>
        <nav className="mainNavigation">
          <ul className="mainNavigation_items">
            <li className="mainNavigation_item">Login</li>
            <li className="mainNavigation_item">Register</li>
            <li className="mainNavigation_item">Profile</li>
          </ul>
        </nav>
      </header>
      <section className="mainSection">
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
        <section className="mainSection__register hide">
          <div className="formContainer">
            <h2>Login:</h2>
            <form>
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Name" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </section>
        <section className="mainSection__profile hide">
          <h1>Profile page:</h1>
          <div className="fakeImage"></div>
          <article>
            <ul className="profile">
              <li>
                <span>Name:</span> Oleg
              </li>
              <li>
                <span>Email:</span> nuba8184@gmail.com
              </li>
              <li>
                <span>Info:</span>
                <p>
                  Человек который зарегистрировался и работает за деньги. И ищет
                  сксесс в своей жизни
                </p>
              </li>
            </ul>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
