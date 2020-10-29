import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import React, { useState, useEffect } from "react";
import { firebaseAuth } from "./firebase/init";
import { getUserProfileDocument } from "./firebase/functions";
import NotificationToast from "./components/notification-toast/NotificationToast";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLoginNotif, setShowLoginNotif] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await getUserProfileDocument(userAuth);
        user.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            userType: snapshot.get("userType"),
            ...snapshot.data(),
          });
        });
        setShowLoginNotif(true);
      } else {
        setCurrentUser(null);
        setShowLoginNotif(true);
      }
    });
  }, []);

  return (
    <div className="App">
      {currentUser ? (
        <NotificationToast
          show={showLoginNotif}
          close={setShowLoginNotif}
          text={"You are now logged in"}
        />
      ) : (
        <NotificationToast
          show={showLoginNotif}
          close={setShowLoginNotif}
          text={"You have logged out"}
        />
      )}
      <Navigation currentUser={currentUser} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home currentUser={currentUser} />}
        />
        <Route
          path="/register"
          render={() => (!currentUser ? <Register /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
