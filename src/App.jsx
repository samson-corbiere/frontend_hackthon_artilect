import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Chat} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
