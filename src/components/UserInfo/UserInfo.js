import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div>
      <div className="user-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          alt="user"
        />
        <h3>Jhone Doe</h3>
        <p>Web Developer</p>
      </div>
      <div className="user-body-info">
        <div>
          <h3>60kg</h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>5.9</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>30Yrs</h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
