import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.scss";

function Register() {
  return (
    <div className="register-main">
      <div className="register-donator">
        <h3 style={{ textAlign: "center", padding: "20px 0px" }}>
          Would like to Donate?
        </h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="register-receiver">
        <h3 style={{ textAlign: "center", padding: "20px 0px" }}>
          Would like to Receive?
        </h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
