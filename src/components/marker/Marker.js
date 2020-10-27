import React from "react";
import "./Marker.scss";

const MyMarker = ({ text, tooltip }) => (
  <div className="circle">
    <span className="circleText" title={tooltip}>
      {text}
    </span>
  </div>
);

export default MyMarker;
