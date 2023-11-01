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
import currentLocationIcon, { orangeIcon, redIcon, yellowIcon } from "../../components/constants";
import { FindLocation } from "../context/LocationContext";
import VerifyAddress from "./VerifyAddress";

const array = [
    {
        lat: 41.992336,
        lng: 21.418503,
        priority: "low",
    },
    {
        lat: 41.991634,
        lng: 21.419855,
        priority: "medium",
    },
    {
        lat: 41.993628,
        lng: 21.420091,
        priority: "high",
    },
];

const existingReportMarkers = array.map((item) => {
    let icon = currentLocationIcon;

    switch (item.priority) {
        case "low":
            icon = yellowIcon;
            break;
        case "medium":
            icon = orangeIcon;
            break;
        case "high" || "very high":
            icon = redIcon;
            break;
    }

    return (
        <Marker position={item} icon={icon} key={item.lat + item.lng}>
            <Popup>{item.priority}</Popup>
        </Marker>
    );
});

const PickYourLocation = () => {
    const { selectedLocation, address, setSelectedLocation, confirmAddress, handleConfirmation } = FindLocation();

    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                setSelectedLocation(e.latlng);
            },
        });

        return null;
    }

    const handleClick = () => {
        console.log("e")
    }

    return (
        <>
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
            {existingReportMarkers}
            {selectedLocation && (
                <>
                    <Marker position={selectedLocation} icon={currentLocationIcon}>
                    </Marker>
                    <Circle
                        center={selectedLocation}
                        radius={1000} // You can adjust the radius (in meters) as needed
                        fillColor="blue"
                        fillOpacity={0.2}
                    />
                </>
            )}
        </MapContainer>
            {confirmAddress && <VerifyAddress address={address} togglePopup={handleConfirmation} />}
            </>
    );
}

export default PickYourLocation
