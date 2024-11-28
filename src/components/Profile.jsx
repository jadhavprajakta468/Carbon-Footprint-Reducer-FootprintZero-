import React from "react";
import ScoreList from "./Dashboard/ScoreList";
import CarbonFootprint from "./Dashboard/CarbonFootprint";
import "./Profile.css";

const Profile = ({ email }) => {
  return (
    <div className="profile-container">
      <h1>Profile of {email}</h1>
      <div className="profile-content">
        <div>
          <ScoreList email={email} />
        </div>
        <div>
          <CarbonFootprint email={email} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
