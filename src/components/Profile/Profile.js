import React from "react";

function Profile() {
  return (
    <section className="mainSection__profile">
      <h1>Profile page:</h1>
      <div className="fakeImage"></div>
      <article>
        <ul className="profile">
          <li>
            <span>Name:</span> Oleg
          </li>
          <li>
            <span>Email:</span> oleg@gmail.com
          </li>
          <li>
            <span>Info:</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Profile;
