import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import BottomNavigation from "./components/BottomNavigation";
import Accueil from "./components/Accueil";
import Projects from "./components/Projects";
import Communaute from "./components/Communaute";
import Direct from "./components/Direct";
import Machine from "./components/Machine";
import CardSquare from "./components/CardSquare";
import Profile from "./components/Profile";
import PhotoMaker from "./components/PhotoMaker";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Chat />
          <Switch>
            <Route exact path="/Accueil" component={Accueil}></Route>
            <Route exact path="/Machines" component={Machine}></Route>
            <Route exact path="/Projets" component={Projects}></Route>
            <Route exact path="/Communaute" component={Communaute}></Route>
            <Route exact path="/Direct" component={Direct}></Route>
          </Switch>
          <BottomNavigation />
        </div>
      </Router>
    );
  }
}

export default App;

/* 
<div className="main">
          <Chat />
          <main>
          <Chat />
            <Machine />
            <CardSquare />
            <Profile />
            <PhotoMaker />
          <main>
          <Switch>
              <Route exact path="/Accueil" component={Accueil}></Route>
              <Route exact path="/Machines" component={Machine}></Route>
              <Route exact path="/Projets" component={Projects}></Route>
              <Route exact path="/Communaute" component={Communaute}></Route>
              <Route exact path="/Direct" component={Direct}></Route>
            </Switch>
          </main>
          <BottomNavigation />
        </div>

*/
