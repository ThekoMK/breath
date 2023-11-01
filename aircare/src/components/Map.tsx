import React from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMapEvents,
} from "react-leaflet";
import L, { LatLng } from "leaflet";
import currentLocationIcon, { orangeIcon, redIcon, yellowIcon } from "./constants";
import { FindLocation } from "../react/context/LocationContext";



export default function MapApp() {
  const { selectedLocation, address, setSelectedLocation } = FindLocation();

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setSelectedLocation(e.latlng);
      },
    });

    return null;
  }

  return (
    <MapContainer
      center={[41.9929027, 21.4173703]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
