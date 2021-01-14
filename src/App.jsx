import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Machine from "./components/Machine";
import CardSquare from "./components/CardSquare";
import Profile from "./components/Profile"
import PhotoMaker from "./components/PhotoMaker";


class App extends React.Component {

  render() {
    return (
      <div className="application">
        <Chat/>
        <Machine />
        <CardSquare />
        <Profile />
      </div>
    );
  }
}

export default App;
