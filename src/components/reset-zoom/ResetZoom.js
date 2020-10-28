import React from "react";
import "./ResetZoom.scss";

function ResetZoom({ click }) {
  return (
    <div
      className="reset-zoom-control-ui"
      title="Click to reset zoom"
      onClick={click}
    >
      <div className="reset-zoom-control-text">Reset Zoom</div>
    </div>
  );
}

export default ResetZoom;
