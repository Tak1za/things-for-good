import React, { useState } from "react";
import "./Home.scss";
import Address from "../address/Address";
import Map from "../map/Map";

function Home(props) {
  const [locations, setLocations] = useState([]);
  console.log(locations);
  return (
    <div className="home-container">
      <div className="home-map-container">
        <Map locations={locations} currentUser={props.currentUser} />
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
