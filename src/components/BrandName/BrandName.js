import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./BrandName.css";

const BrandName = () => {
  return (
    <div>
      <h1 className="brand-name">
        <FontAwesomeIcon icon={faDumbbell} />
        ActivePowerZone
      </h1>
    </div>
  );
};

export default BrandName;
