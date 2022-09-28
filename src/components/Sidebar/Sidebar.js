import React from "react";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <UserInfo></UserInfo>
        <Break></Break>
        <ExerciseDetails></ExerciseDetails>
      </div>
    </div>
  );
};

export default Sidebar;
