import React from "react";
import "./Break.css";

const Break = (props) => {
  return (
    <div>
      <h3>Add A Break</h3>
      <div className="break-time">
        <div onClick={() => props.handleBreakTime(10)}>10s</div>
        <div onClick={() => props.handleBreakTime(20)}>20s</div>
        <div onClick={() => props.handleBreakTime(30)}>30s</div>
        <div onClick={() => props.handleBreakTime(40)}>40s</div>
        <div onClick={() => props.handleBreakTime(50)}>50s</div>
      </div>
    </div>
  );
};

export default Break;
