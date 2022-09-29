import React from "react";
import "./MainArea.css";
import Exercises from "../Exercises/Exercises";
import BrandName from "../BrandName/BrandName";
import Blog from "../Blog/Blog";

const MainArea = (props) => {
  const { handleAddToList } = props;
  return (
    <div className="main-area">
      <BrandName></BrandName>
      <Exercises handleAddToList={handleAddToList}></Exercises>
      <Blog></Blog>
    </div>
  );
};

export default MainArea;
