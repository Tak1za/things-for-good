import React from "react";
import GoogleMap from "google-map-react";
import MyMarker from "../marker/Marker";

function Map({ locations, currentUser }, props) {
  const _onChildClick = (address, lat, lng) => {
    console.log(address);
    console.log(lat);
    console.log(lng);
  };
  return (
    <GoogleMap
      bootstrapURLKeys={{
        key: "AIzaSyAipWncoxprrnq5-QLWblUT4EpDNcb8YZ8",
        language: "en",
        region: "IN",
      }}
      zoom={15}
      defaultCenter={{ lat: 28.408913, lng: 77.317787 }}
      center={
        locations.length !== 0
          ? {
              lat: locations[locations.length - 1].lat,
              lng: locations[locations.length - 1].lng,
            }
          : undefined
      }
    >
      {locations.length === 0
        ? ""
        : locations.map((location) => (
            <MyMarker
              key={location.address}
              address={location.address}
              lat={location.lat}
              lng={location.lng}
              currentUser={currentUser}
              onChildClick={_onChildClick}
            />
          ))}
    </GoogleMap>
  );
}

export default Map;
