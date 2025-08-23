"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import marker icons properly for Vite/ESM
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default Leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to update map view dynamically
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15); // zoom into user location
  }, [center, map]);
  return null;
}

export default function CustomMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Get system geolocation on first load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        async () => {
          // fallback: fetch location by IP
          try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            setUserLocation([data.latitude, data.longitude]);
          } catch (err) {
            console.error("Failed to fetch IP location", err);
            setUserLocation([9.9312, 76.2673]); // fallback Kochi
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // <-- High accuracy
      );
    } else {
      setUserLocation([9.9312, 76.2673]); // fallback
    }
  }, []);

  if (!userLocation) {
    return <p className="text-center py-4">📍 Detecting your location...</p>;
  }

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={userLocation}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView center={userLocation} />

        {/* User Marker */}
        <Marker position={userLocation}>
          <Popup>📍 You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
