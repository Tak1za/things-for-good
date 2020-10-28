import React from "react";
import "./Marker.scss";

const MyMarker = ({
  writtenAddress,
  address,
  lat,
  lng,
  locationType,
  onChildClick,
}) => {
  let comp = null;
  switch (locationType) {
    case "donator":
      comp = <i className="fas fa-hand-holding-medical" />;
      break;
    case "receiver":
      comp = <i className="fas fa-satellite-dish" />;
      break;
    default:
      comp = <i className="fas fa-map-marker-alt" />;
  }
  return (
    <div
      className="marker-container"
      onClick={() => onChildClick(writtenAddress, address, lat, lng)}
    >
      {comp}
    </div>
  );
};

export default MyMarker;
