import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="main">
          <p>je suis la page d'accueil</p>
          {/* <Chat />
          <BottomNavigation />
          <main>
            <Route exact path="/Projects" component={Projects}></Route>
          </main> */}
          
          {/* <footer>A&F Développement</footer> */}
        </div>
      </Router>
    );
  }
}

export default Accueil;
