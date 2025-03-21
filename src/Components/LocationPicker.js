import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icon
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function LocationPicker({ onLocationSelect }) {
  const [position, setPosition] = useState([28.6139, 77.209]); // Default: New Delhi
  const [address, setAddress] = useState("Fetching address...");

  // Function to fetch address using OpenStreetMap Nominatim API
  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    }
  };

  // Map Click Event Handler
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const newPos = [e.latlng.lat, e.latlng.lng];
        setPosition(newPos);
        fetchAddress(e.latlng.lat, e.latlng.lng);
        onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng, address });
      },
    });
    return null;
  }

  // Handle Marker Drag Event
  function handleMarkerDrag(e) {
    const newPos = [e.target.getLatLng().lat, e.target.getLatLng().lng];
    setPosition(newPos);
    fetchAddress(newPos[0], newPos[1]);
    onLocationSelect({ lat: newPos[0], lng: newPos[1], address });
  }

  // Fetch Address Initially
  useEffect(() => {
    fetchAddress(position[0], position[1]);
  }, []);

  return (
    <div className="w-full min-w-[60vw] h-96 rounded-lg overflow-hidden border border-gray-300 shadow-md relative">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        <Marker
          position={position}
          draggable
          icon={markerIcon}
          eventHandlers={{ dragend: handleMarkerDrag }}
        />
      </MapContainer>

      {/* Display Latitude, Longitude, and Address */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-3 shadow-lg">
        <p className="text-sm font-semibold">Latitude: {position[0]}</p>
        <p className="text-sm font-semibold">Longitude: {position[1]}</p>
        <p className="text-sm">📍 {address}</p>
      </div>
    </div>
  );
}

export default LocationPicker;
