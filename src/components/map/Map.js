import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleMap from "google-map-react";
import MyMarker from "../marker/Marker";
import ResetZoom from "../reset-zoom/ResetZoom";
import YourLocation from "../your-location/YourLocation";

function Map({ locations, currentUser }) {
  const [thisMap, setThisMap] = useState(null);
  const [yourLocation, setYourLocation] = useState({
    show: false,
    lat: 0.0,
    lng: 0.0,
  });

  const getPosition = (map) => {
    console.log(map);
    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then((res) => {
        if (res.state === "denied") {
          alert("Please allow browser to access your location");
        } else {
          navigator.geolocation.getCurrentPosition((pos) => {
            console.log("Position: ", pos);
            setYourLocation((prevState) => {
              return {
                show: !prevState.show,
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              };
            });
            map.setZoom(15);
            map.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          });
        }
      });
  };

  const _onChildClick = (writtenAddress, address, lat, lng) => {
    thisMap.panTo({ lat, lng });
    console.log(writtenAddress);
    console.log(address);
    console.log(lat);
    console.log(lng);
  };

  const createMapOptions = (maps) => {
    return {
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.TOP_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: maps.ControlPosition.LEFT_CENTER,
      },
      streetViewControl: true,
      streetViewControlOptions: {
        position: maps.ControlPosition.LEFT_TOP,
      },
      fullscreenControl: true,
    };
  };

  const resetZoom = (map) => {
    map.panTo({ lat: 20.5937, lng: 78.9629 });
    map.setZoom(4);
  };

  const handleApiLoaded = (map, maps) => {
    setThisMap(map);
    const controlButton = document.createElement("div");
    ReactDOM.render(<ResetZoom click={() => resetZoom(map)} />, controlButton);
    map.controls[maps.ControlPosition.BOTTOM_CENTER].push(controlButton);

    const locationControlButton = document.createElement("div");
    ReactDOM.render(
      <YourLocation click={() => getPosition(map)} />,
      locationControlButton
    );
    map.controls[maps.ControlPosition.RIGHT_TOP].push(locationControlButton);
  };

  return (
    <GoogleMap
      bootstrapURLKeys={{
        key: "AIzaSyAipWncoxprrnq5-QLWblUT4EpDNcb8YZ8",
        language: "en",
        region: "IN",
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      zoom={15}
      defaultCenter={{ lat: 28.408913, lng: 77.317787 }}
      center={
        locations.length !== 0
          ? currentUser && currentUser.location
            ? {
                lat: currentUser.location.lat,
                lng: currentUser.location.lng,
              }
            : { lat: locations[0].lat, lng: locations[0].lng }
          : undefined
      }
      options={createMapOptions}
    >
      {locations.length === 0
        ? ""
        : locations.map((location) => (
            <MyMarker
              key={location.address}
              address={location.address}
              writtenAddress={location.writtenAddress}
              lat={location.lat}
              lng={location.lng}
              locationType={location.locationType}
              onChildClick={_onChildClick}
            />
          ))}
      {yourLocation.show ? (
        <MyMarker
          address={"Your location"}
          writtenAddress={"Your location"}
          onChildClick={_onChildClick}
          lat={yourLocation.lat}
          lng={yourLocation.lng}
          locationType={"your-location"}
        />
      ) : null}
    </GoogleMap>
  );
}

export default Map;
