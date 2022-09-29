import { useState } from "react";
import "./App.css";
import MainArea from "./components/MainArea/MainArea";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  const handleAddToList = (time) => {
    setExerciseTime(exerciseTime + time);
  };

  return (
    <div className="App">
      <MainArea handleAddToList={handleAddToList}></MainArea>
      <Sidebar time={exerciseTime}></Sidebar>
    </div>
  );
}

export default App;
