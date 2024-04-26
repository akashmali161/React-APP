import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import MapView from "./components/MapView";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import SearchFilter from "./components/SearchFilter";
import LoadingIndicator from "./components/LoadingIndicator";
import { fetchProfiles } from "./services/ProfileService";
import "./App.css"; // Import the CSS file

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const data = await fetchProfiles();
      setProfiles(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching profiles:", error);
      setIsLoading(false);
    }
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  const handleClearSelection = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="app-container">
      {isLoading && <LoadingIndicator />}
      <div className="profiles-container">
        <SearchFilter profiles={profiles} setProfiles={setProfiles} />
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSelect={() => handleProfileSelect(profile)}
          />
        ))}
      </div>
      {selectedProfile ? (
        <div className="details-map-container">
          <ProfileDetails profile={selectedProfile} />
          <MapView profile={selectedProfile} />
          <button onClick={handleClearSelection}>Close Map</button>
        </div>
      ) : null}
      <AdminPanel profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
};

export default App;
