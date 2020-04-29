import React from "react";
import "./style.css";
import avatarImg from "../../assets/ava.jpg";

function Profile({ name, email, info }) {
  return (
    <section className="mainSection__profile">
      <article className="profile_article">
        <figure className="avatar">
          <img id="object_position" src={avatarImg} alt={name} />
        </figure>
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
