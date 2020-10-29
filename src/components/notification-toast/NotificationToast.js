import React from "react";
import "./NotificationToast.scss";
import { Toast } from "react-bootstrap";

function NotificationToast({ show, close, text }) {
  return (
    <Toast
      className="notification-toast"
      onClose={() => close(false)}
      show={show}
      delay={5000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">Alert</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
}

export default NotificationToast;
