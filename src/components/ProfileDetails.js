import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileDetails;
