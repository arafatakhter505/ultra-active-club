import React from "react";
import "./ExerciseItem.css";

const ExerciseItem = (props) => {
  const { data, handleAddToList } = props;
  const { title, age, time, img } = data;

  return (
    <div className="exercise-item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>For Age: {age}</p>
      <p>Time required: {time}</p>
      <button onClick={() => handleAddToList(time)} className="add-btn">
        Add to list
      </button>
    </div>
  );
};

export default ExerciseItem;
