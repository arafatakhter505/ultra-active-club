import React from "react";
import "./ExerciseDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExerciseDetails = (props) => {
  const { exerciseTime, breakTime } = props;
  const handleActivity = () => {
    toast.success("Congratulation You Finished Activity", {
      position: "top-center",
    });
  };

  return (
    <div>
      <h3>Exercise Details</h3>
      <p>Exercise Time: {exerciseTime} Seconds</p>
      <p>Break Time: {breakTime} Seconds</p>
      <button onClick={handleActivity} className="activity-btn">
        Activity Completed
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ExerciseDetails;
