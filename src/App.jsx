import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import BottomNavigation from "./components/BottomNavigation";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Accueil from "./components/Accueil";
import Projects from "./components/Projects";
import Communaute from "./components/Communaute";
import Machine from "./components/Machine";
import Direct from "./components/Direct";
import Machine from "./components/Machine";
import CardSquare from "./components/CardSquare";
import Profile from "./components/Profile"
import PhotoMaker from "./components/PhotoMaker";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="main">
          {/* <p>je suis la page d'accueil</p> */}
          <Chat />
          <main>
            <Machine />
            <CardSquare />
            <Profile />
            {" "}
            {/* accueil machine projets communauté  direct */}
            <Switch>
              <Route exact path="/Accueil" component={Accueil}></Route>
              <Route exact path="/Machines" component={Machine}></Route>
              <Route exact path="/Projets" component={Projects}></Route>
              <Route exact path="/Communaute" component={Communaute}></Route>
              <Route exact path="/Direct" component={Direct}></Route>

            </Switch>
          </main>
          <BottomNavigation />

          {/* <footer>A&F Développement</footer> */}
        </div>
      </Router>
      <div className="application">
        <Chat/>
        <Machine />
        <CardSquare />
        <Profile />
        <PhotoMaker />
      </div>
    );
  }
}

export default App;
