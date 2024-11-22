import React from "react";
import "../Styles/ColorfulLine.css";
import m from '../m.jpg';
const ColorfulLine = () => {
  return (
    <div className="line-container">
      <div className="line"></div>
      <div className="circle"></div>
      <span className="text">

      <img src={m} alt="Company Logo" className="company-logos" />
      </span>
    </div>
  );
};

export default ColorfulLine;
