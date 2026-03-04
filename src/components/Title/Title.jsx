import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title-container">
      <div className="title-box">
        <span className="subtitle">{subTitle}</span>
        <h2 className="title-heading">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </div>
  );
};

export default Title;