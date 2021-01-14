import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import PhotoMaker from "./components/PhotoMaker";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          < PhotoMaker />
          <Switch>
            <Route path="/" component={Chat} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
