import React from "react";
import "./Marker.scss";

const MyMarker = ({ address, lat, lng, currentUser, onChildClick }) => {
  return (
    <div
      className="marker-container"
      onClick={() => onChildClick(address, lat, lng)}
    >
      {currentUser ? (
        currentUser.userType === "donator" ? (
          <i className="fas fa-hand-holding-medical" />
        ) : (
          <i className="fas fa-satellite-dish" />
        )
      ) : null}
    </div>
  );
};

export default MyMarker;
