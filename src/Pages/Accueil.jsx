import React, {Component} from "react";
//import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
//import machine from "../static/machine.json"
import PhotoMachine from "../components/PhotoMachine"
import "../styles/Accueil.css";
import axios from "axios";


class Accueil extends Component {
    constructor(props) {
      super(props);
      this.state = {
        machineData: [],
      };
    }

    getMachine() {
      console.log("coucou")
      const url = "http://localhost:5000/api/machines";
      axios.get(url)
      .then((response) => response.data)
      .then((machineArray) => this.setState({machineData : machineArray}))
    }

    componentDidMount() {
        this.getMachine() 
    }

      render(){
        const { machineData } = this.state;
        return (
        <div className="background-home">
            {machineData.map(item =>
                <PhotoMachine
                  intro={item.intro_sentence}
                  photo={item.url_photo}
                  name={item.user_name}
                />
          )
          }
        </div>
        );
      }
}

export default Accueil;

