import React from "react";
import "../styles/Dashboard.css";
import profilePicture from "../assets/profilepicture.jpg";
import UserInfo from "../components/UserInfo";
import DashboardHeader from "../components/DashboardHeader";
import LogoutButton from "../components/LogoutButton";

function Dashboard() {
  return (
    <div className="dashboard">
      <div
        className="dashboard-leftSide"
        style={{ backgroundImage: `url(${profilePicture})` }}
      ></div>
      <div className="dashboard-rightSide">
        <DashboardHeader />
        <UserInfo />
        <LogoutButton />
      </div>
    </div>
  );
}

export default Dashboard;
