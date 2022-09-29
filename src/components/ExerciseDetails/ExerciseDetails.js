import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = (props) => {
  return (
    <div>
      <h3>Exercise Details</h3>
      <p>Exercise Time: {props.exerciseTime} Seconds</p>
      <p>Break Time: {props.breakTime} Seconds</p>
      <button className="activity-btn">Activity Completed</button>
    </div>
  );
};

export default ExerciseDetails;
