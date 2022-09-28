import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./MainArea.css";

const MainArea = () => {
  return (
    <div className="main-area">
      <h2 className="brand-name">
        <FontAwesomeIcon icon={faDumbbell} />
        ActivePowerZone
      </h2>
      <h3>Select today's exercise</h3>
    </div>
  );
};

export default MainArea;
