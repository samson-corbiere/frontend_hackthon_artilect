import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="application">
        <Chat/>
        <Machine />

      </div>
    );
  }
}

export default App;
