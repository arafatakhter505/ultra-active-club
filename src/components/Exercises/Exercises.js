import React, { useEffect, useState } from "react";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <div>
      <h3>Select today's exercise</h3>
      <div className="exercises-item-container">
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} data={exercise}></ExerciseItem>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
