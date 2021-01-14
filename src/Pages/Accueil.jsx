import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "../styles/Accueil.css";
import Machine from "../components/Machine";
import Chat from "../components/Chat";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChatbot: false,
      botId: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // IMPORTANT DON'T DELETE IT
  handleClick(event) {
    const id = event.target.id;
    console.log("ACCUEIL handleclick id ==> " + id);
    this.setState(
      {
        openChatbot: !this.state.openChatbot,
        botId: id
      },
      function() {
        console.log("setState completed", this.state);
      }
    );
    console.log("ACCUEIL handleclick botId ==> " + this.state.botId);
  }

  render() {
    console.log("ACCUEIL render");
    return (
      <div className="background-home">
        <Router>
          <div className="main">
            <div>je suis la page d'accueil</div>
            <button id="1" onClick={this.handleClick}>
              FIRST MACHINE
            </button>
            <button id="2" onClick={this.handleClick}>
              SECOND MACHINE
            </button>
            <button id="3" onClick={this.handleClick}>
              THIRD MACHINE
            </button>
            <button id="4" onClick={this.handleClick}>
              FORTH MACHINE
            </button>
            <button id="5" onClick={this.handleClick}>
              5 MACHINE
            </button>
          </div>
        </Router>
        <Chat opened={this.state.openChatbot} botId={this.state.botId} />
      </div>
    );
  }
}

export default Accueil;
