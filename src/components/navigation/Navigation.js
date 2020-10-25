import React from "react";
import "./Navigation.scss";
import { Navbar, Nav } from "react-bootstrap";
import { firebaseAuth } from "../../firebase/init";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Things For Good
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          {props.currentUser ? (
            <>
              <Nav.Link>({props.currentUser.email})</Nav.Link>
              <Nav.Link
                onClick={() =>
                  firebaseAuth.signOut().then(console.log("Logged out"))
                }
                as={Link}
                to="/"
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
