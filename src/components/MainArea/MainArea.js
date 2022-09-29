import React from "react";
import "./MainArea.css";
import Exercises from "../Exercises/Exercises";
import BrandName from "../BrandName/BrandName";

const MainArea = (props) => {
  return (
    <div className="main-area">
      <BrandName></BrandName>
      <Exercises handleAddToList={props.handleAddToList}></Exercises>
    </div>
  );
};

export default MainArea;
