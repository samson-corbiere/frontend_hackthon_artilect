import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "../styles/Accueil.css";
import Machine from "../components/Machine";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background-home">
        <Router>
          <div className="main">
            <Machine></Machine>
            <div>je suis la page d'accueil</div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Accueil;
