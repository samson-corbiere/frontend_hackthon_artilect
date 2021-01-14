import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Chat from "./components/Chat";
import BottomNavigation from "./components/BottomNavigation";
import Accueil from "./Pages/Accueil";
import Makers from "./Pages/Makers";
import Direct from "./components/Direct";
import Machine from "./components/Machine";
import Profile from "./Pages/Profile"
import ProjectsList from "./Pages/ProjectsList";


function App() {

  return (

    <Router>
      <div className="main">
        <Chat />
        <Switch>
          <Route exact path="/" component={Accueil}></Route>
          <Route exact path="/machine/:id" component={Machine}></Route>
          <Route exact path="/projets" component={ProjectsList}></Route>
          <Route exact path="/makers" component={Makers}></Route>
          <Route exact path="/direct" component={Direct}></Route>
          <Route exact path="/profil" component={Profile}></Route>
          </Switch>
          <div className="allFooter">
          <div className="navigationFooter">
              <BottomNavigation />
            </div>
            <div className="chatPlace">
              <Chat />
            </div>
          </div>
        </div>
      </Router>
  )
}


export default App;