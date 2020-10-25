// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
