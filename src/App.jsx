import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import Machine from "./components/Machine";
import CardSquare from "./components/CardSquare";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="application">
        <Chat/>
        <Machine />
        <CardSquare />

      </div>
    );
  }
}

export default App;
