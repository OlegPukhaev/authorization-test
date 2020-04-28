import React from "react";

function Profile({ name, email, info }) {
  console.log("Redux data", name);
  // const {name, email, info}
  return (
    <section className="mainSection__profile">
      <h1>Profile page:</h1>
      {/* <div className="fakeImage"></div> */}
      <article className="profile_article">
        <ul className="profile">
          <li>
            <span>Name:</span> {name}
          </li>
          <li>
            <span>Email:</span> {email}
          </li>
          <li>
            <span>Info:</span>
            <p>{info}</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Profile;
