import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import React, { useState, useEffect } from "react";
import { getUserProfileDocument, firebaseAuth } from "./firebase/init";

function App() {
  const [currentUser, setCurrentUser] = useState();

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
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  console.log("Current User: ", currentUser);

  return (
    <div className="App">
      <Navigation currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/register"
          render={() => (!currentUser ? <Register /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
