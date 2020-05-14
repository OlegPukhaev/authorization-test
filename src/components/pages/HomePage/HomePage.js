import React from "react";
import "./style.css";

const HomePage = ({ data }) => {
  return (
    <div className="containerWrapper">
      <h2>{data}</h2>
    </div>
  );
};

export default HomePage;
