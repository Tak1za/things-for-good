import React from "react";
import "./YourLocation.scss";

function YourLocation({ click }) {
  return (
    <div
      className="your-location-control-ui"
      title="Click to find your location"
      onClick={click}
    >
      <div className="your-location-control-text">
        <i className="far fa-compass" />
      </div>
    </div>
  );
}

export default YourLocation;
