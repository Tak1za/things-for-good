import React from "react";
import { Form, Button } from "react-bootstrap";
import { firebaseFirestore, signInWithGoogle } from "../../firebase/init";
import "./Register.scss";

const addUserType = async (user, type) => {
  const userReference = firebaseFirestore.doc(`users/${user.uid}`);
  const snapshot = await userReference.get();
  let date = null;
  if (!snapshot.exists) {
    date = new Date();
    const { displayName, email } = user;
    try {
      await userReference.set({
        name: displayName,
        email: email,
        date: date,
        userType: type,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const googleSignIn = (type) => {
  signInWithGoogle()
    .then(async (user) => await addUserType(user.user, type))
    .catch((err) => console.error(err));
};

function Register() {
  return (
    <div className="register-main">
      <div className="register-donator">
        <div className="register-donator-container">
          <h3 className="heading-style">Would like to Donate?</h3>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              <i class="fas fa-share-square"></i>Submit
            </Button>
            <Button
              variant="danger"
              type="button"
              className="google-sign-in-button"
              onClick={() => googleSignIn("donator")}
            >
              <i className="fab fa-google"></i>Login
            </Button>
          </Form>
        </div>
      </div>
      <div className="register-receiver">
        <div className="register-receiver-container">
          <h3 className="heading-style">Would like to Receive?</h3>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              <i class="fas fa-share-square"></i>Submit
            </Button>
            <Button
              variant="danger"
              type="button"
              className="google-sign-in-button"
              onClick={() => googleSignIn("receiver")}
            >
              <i className="fab fa-google"></i>Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
