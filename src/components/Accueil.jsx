import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./Accueil.css";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="main">
          <p>je suis la page d'accueil</p>
        </div>
      </Router>
    );
  }
}

export default Accueil;
