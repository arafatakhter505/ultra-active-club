import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = (props) => {
  const { exerciseTime, breakTime } = props;
  const handleActivity = () => {
    alert("Hey Bro");
  };

  return (
    <div>
      <h3>Exercise Details</h3>
      <p>Exercise Time: {exerciseTime} Seconds</p>
      <p>Break Time: {breakTime} Seconds</p>
      <button onClick={handleActivity} className="activity-btn">
        Activity Completed
      </button>
    </div>
  );
};

export default ExerciseDetails;
