import React, { useState } from "react";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { time } = props;
  const [breakTime, setBrekTime] = useState(0);
  const handleBreakTime = (time) => {
    setBrekTime(time);
    localStorage.setItem("breakTime", time);
  };
  const getBreakTime = localStorage.getItem("breakTime");

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <UserInfo></UserInfo>
        <Break handleBreakTime={handleBreakTime}></Break>
        <ExerciseDetails
          exerciseTime={time}
          breakTime={getBreakTime ? getBreakTime : breakTime}
        ></ExerciseDetails>
      </div>
    </div>
  );
};

export default Sidebar;
