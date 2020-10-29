import React, { useState, useEffect } from "react";
import "./Home.scss";
import Address from "../address/Address";
import Map from "../map/Map";
import { allUserData } from "../../firebase/functions";

const fetchData = async () => {
  const data = await allUserData();
  let allData = data.docs
    .filter((item) => {
      if (item.data().location) {
        return true;
      }
      return false;
    })
    .map((item) => {
      return{
        ...item.data().location,
        name: item.data().name,
        email: item.data().email
      }
    });
  console.log(allData);
  return allData;
};

function Home({ currentUser }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => setLocations(res))
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
    <div className="home-container">
      <div className="home-map-container">
        <Map locations={locations} currentUser={currentUser} />
        <Address currentUser={currentUser} />
      </div>
    </div>
  );
}

export default Home;
