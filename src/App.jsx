import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import Machine from "./components/Machine"
import Profile from "./components/Profile"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="application">
        <Chat/>
        <Machine />
        <Profile />

      </div>
    );
  }
}

export default App;
