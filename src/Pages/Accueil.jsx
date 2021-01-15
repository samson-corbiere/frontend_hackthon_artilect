import React, { Component } from "react";
//import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
//import machine from "../static/machine.json"
import { Link } from "react-router-dom";
import PhotoMachine from "../components/PhotoMachine";
import "../styles/Accueil.css";
import "../styles/Machine.css";
import axios from "axios";
import Project from "./Project.jsx";

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machineData: [],
      machineId: 0,
    };
  }

  getMachine() {
    console.log("coucou");
    const url = "http://localhost:5000/api/machines";
    axios
      .get(url)
      .then((response) => response.data)
      .then((machineArray) => this.setState({ machineData: machineArray }));
  }

  componentDidMount() {
    this.getMachine();
  }

  render() {
    const { machineData } = this.state;
    return (
      <div className="background-home">
        {machineData.map((item) => (
          <div className="container">
            <img
              src={item.url_photo}
              className={item.id % 2 == 0 ? "machine1" : "machine"}
            />
            <Link
              to={`/machine/${item.id}`}
              className={item.id % 2 == 0 ? "bubble1" : "bubble"}
            >
              <p> {item.intro_sentence} </p>
            </Link>
          </div>
        ))}
        <div className="home">{""}</div>
      </div>
    );
  }
}

export default Accueil;

/* 
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
    console.log("--- ACCUEIL handleclick id ==> " + id);
    this.setState(
      {
        openChatbot: !this.state.openChatbot,
        botId: id
      },
      function() {
        console.log("--- ACCUEIL handleclick setState completed", this.state);
      }
    );
    console.log("--- ACCUEIL  handleclick botId ==> " + this.state.botId);
  }

  render() {
    console.log("--- ACCUEIL render");
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
        <Chat 
          opened={this.state.openChatbot} 
          botId={this.state.botId} 
          />
      </div>
    );
  }
*/
