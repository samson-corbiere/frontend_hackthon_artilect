import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import Machine from "./components/Machine"
import HomePage from "./components/HomePage"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="application">
        <Chat/>
        <HomePage />
      </div>
    );
  }
}

export default App;
