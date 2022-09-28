import React from "react";
import "./MainArea.css";
import Exercises from "../Exercises/Exercises";
import BrandName from "../BrandName/BrandName";

const MainArea = () => {
  return (
    <div className="main-area">
      <BrandName></BrandName>
      <Exercises></Exercises>
    </div>
  );
};

export default MainArea;
