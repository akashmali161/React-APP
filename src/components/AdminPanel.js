import React, { useState } from "react";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editProfileId, setEditProfileId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProfile = () => {
    if (
      newProfile.name &&
      newProfile.photo &&
      newProfile.description &&
      newProfile.address
    ) {
      setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
      setNewProfile({
        name: "",
        photo: "",
        description: "",
        address: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const handleEditProfile = (profile) => {
    setEditMode(true);
    setEditProfileId(profile.id);
    setNewProfile(profile);
  };

  const handleSaveEditProfile = () => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === editProfileId ? newProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditMode(false);
    setEditProfileId(null);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: "",
    });
  };

  const handleDeleteProfile = (profileId) => {
    const updatedProfiles = profiles.filter(
      (profile) => profile.id !== profileId
    );
    setProfiles(updatedProfiles);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="new-profile-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          value={newProfile.photo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newProfile.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={newProfile.address}
          onChange={handleInputChange}
        />
        {editMode ? (
          <div>
            <button onClick={handleSaveEditProfile}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleAddProfile}>Add Profile</button>
        )}
      </div>
      <div className="profile-list">
        <h2>Profile List</h2>
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              <span>{profile.name}</span>
              <button onClick={() => handleEditProfile(profile)}>Edit</button>
              <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
