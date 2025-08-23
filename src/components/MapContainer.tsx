"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import default marker icons
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

// Custom parking icon (car emoji)
const carIcon = L.divIcon({
  className: "custom-car-icon",
  html: `<div style="font-size:28px;">🚗</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);
  return null;
}

function ClosePopupOnOutsideClick() {
    const map = useMap();
  
    useEffect(() => {
      const container = map.getContainer();
  
      const handleDocClick = (e: MouseEvent) => {
        // If the click did NOT happen inside the map container, close popups
        if (!container.contains(e.target as Node)) {
          // Close the currently open popup (if any)
          map.closePopup();
          // Also close any layer-bound popups (markers)
          map.eachLayer((layer: any) => {
            if (typeof layer.closePopup === "function") {
              layer.closePopup();
            }
          });
        }
      };
  
      // Use mousedown/pointerdown so it feels instant
      document.addEventListener("mousedown", handleDocClick);
      return () => document.removeEventListener("mousedown", handleDocClick);
    }, [map]);
  
    return null;
  }
  
  

export default function CustomMap({
  stations,
  userLocation,
  selectedStation,
}: {
  stations: any[];
  userLocation: { lat: number; lng: number } | null;
  selectedStation: any | null;
}) {
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (selectedStation) {
      setLocation([
        parseFloat(selectedStation.latitude),
        parseFloat(selectedStation.longitude),
      ]);
      return;
    }

    if (userLocation) {
      setLocation([userLocation.lat, userLocation.lng]);
      return;
    }

    // If no userLocation yet, try to get it once
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation([pos.coords.latitude, pos.coords.longitude]),
        () => setLocation([9.9312, 76.2673]),
        { enableHighAccuracy: true }
      );
    } else {
      setLocation([9.9312, 76.2673]);
    }
  }, [selectedStation, userLocation]);

  if (!location) {
    return <p className="text-center py-4">📍 Detecting your location...</p>;
  }

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={location}
        zoom={15}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={location} />

        <ClosePopupOnOutsideClick /> 

        {/* Show user marker only when not focusing a selected station */}
        {userLocation && !selectedStation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>📍 You are here</Popup>
          </Marker>
        )}

        {/* Parking Stations */}
        {stations?.map((spot: any) => (
          <Marker
            key={spot.ownerID}
            position={[parseFloat(spot.latitude), parseFloat(spot.longitude)]}
            icon={carIcon}
          >
            <Popup>
              <strong>{spot.owner_name}</strong> <br />
              {spot.owner_address} <br />
              🚗 {spot.plots?.length || 0} slots
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
