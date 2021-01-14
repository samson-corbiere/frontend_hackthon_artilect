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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div style={{ flex: 1 }}>
            <div style={{ flex: 3 }}>
              <Chat />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                paddingLeft : "16px",
                flex: 7
              }}
            >
              <BottomNavigation />
            </div>
          </div>
          <Switch>
            <Route exact path="/Accueil" component={Accueil}></Route>
            <Route exact path="/Machines" component={Machine}></Route>
            <Route exact path="/Projets" component={Projects}></Route>
            <Route exact path="/Communaute" component={Communaute}></Route>
            <Route exact path="/Direct" component={Direct}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
