import React from "react";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapView = ({ profile }) => {
  return (
    <MapContainer center={[profile.latitude, profile.longitude]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[profile.latitude, profile.longitude]}>
        <Popup>
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
