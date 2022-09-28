import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};

export default Sidebar;
