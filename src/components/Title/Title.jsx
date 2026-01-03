import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title-box">
      <span className="subtitle">{subTitle}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
