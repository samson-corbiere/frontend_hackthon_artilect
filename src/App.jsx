import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Chat from "./components/Chat";
import BottomNavigation from "./components/BottomNavigation";
import Accueil from "./Pages/Accueil";
import Makers from "./Pages/Makers";
import Direct from "./components/Direct";
import Header from "./components/Header";
import Machine from "./components/Machine";
import Profile from "./Pages/Profile";
import ProjectsList from "./Pages/ProjectsList";
import Project from "./Pages/Project"
import ProjectMachineUser from "./components/ProjectMachineUser";


function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/"> 
            <Accueil />
          </Route>
          <Route exact path="/machine/:id" component={Machine}></Route>
          <Route exact path="/projets" component={ProjectsList}></Route>
          <Route exact path="/makers" component={Makers}></Route>
          <Route exact path="/projet/:id" component={Project}></Route>
          <Route exact path="/direct" component={Direct}></Route>
          <Route exact path="/profil/:id" component={Profile}></Route>
          <Route exact path="/projectMachineUser/:id" component={ProjectMachineUser}></Route>
          </Switch>
          <div className="allFooter">
            <div className="navigationFooter">
              <BottomNavigation />
            </div>
            <div className="chatPlace">
              <Chat />
            </div>
          </div>
          <div className="chatPlace"></div>
        </div>
    </Router>
  );
}

export default App;
