import React, { useState } from "react";

const SearchFilter = ({ profiles, setProfiles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProfiles(filteredProfiles);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
