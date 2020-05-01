import React, { Component } from "react";
import "./style.css";
import avatarImg from "../../assets/ava.jpg";
import MyContext from "../Context";

// function Profile({ name, email, info }) {
//   return (
//     <MyContext.Consumer>
//       {(value) => {
//         return (
//           <section className="mainSection__profile">
//             <article className="profile_article">
//               <figure className="avatar">
//                 <img id="object_position" src={avatarImg} alt={name} />
//               </figure>
//               <ul className="profile">
//                 <li>
//                   <span>Name:</span> {name}
//                 </li>
//                 <li>
//                   <span>Context Name:</span> {value}
//                 </li>
//                 <li>
//                   <span>Email:</span> {email}
//                 </li>
//                 <li>
//                   <span>Info:</span>
//                   <p>{info}</p>
//                 </li>
//               </ul>
//             </article>
//           </section>
//         );
//       }}
//     </MyContext.Consumer>
//   );
// }

class Profile extends Component {
  render() {
    const { name, email, info } = this.props;
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
              <span>Context Name:</span> {this.context.name}
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
}

Profile.contextType = MyContext;

export default Profile;
