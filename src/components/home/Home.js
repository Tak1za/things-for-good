import React, { useState } from "react";
import "./Home.scss";
import GoogleMapReact from "google-map-react";
import MyMarker from "../marker/Marker";
import Address from "../address/Address";

function Home(props) {
  const [locations, setLocations] = useState([]);
  console.log(locations);
  return (
    <div className="home-container">
      <div className="home-map-container">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAipWncoxprrnq5-QLWblUT4EpDNcb8YZ8",
            language: "en",
            region: "IN",
          }}
          defaultZoom={15}
          defaultCenter={{ lat: 28.408913, lng: 77.317787 }}
        >
          {locations.length === 0
            ? ""
            : locations.map((location) => (
                <MyMarker
                  key={location}
                  lat={28.408913}
                  lng={77.317787}
                  text={"test test"}
                  tooltip={"test"}
                />
              ))}
        </GoogleMapReact>
        <Address
          currentUser={props.currentUser}
          addLocations={setLocations}
          allLocations={locations}
        />
      </div>
    </div>
  );
}

export default Home;
