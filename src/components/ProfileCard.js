import React from "react";

const ProfileCard = ({ profile, onSelect }) => {
  return (
    <div className="profile-card" onClick={onSelect}>
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}>Summary</button>
    </div>
  );
};

export default ProfileCard;
