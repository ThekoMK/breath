import L from "leaflet";
import currentlocationImage from '../images/currentlocation.svg';
import redIconImage from '../images/redIcon.svg';
import yellowIconImage from '../images/yellowIcon.svg';
import orageIconImage from '../images/orangeIcon.svg';

export default L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: currentlocationImage,
});

export const yellowIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: yellowIconImage,
})

export const orangeIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: orageIconImage,
})

export const redIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: redIconImage,
});