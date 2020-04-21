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
  );
}

export default Profile;
