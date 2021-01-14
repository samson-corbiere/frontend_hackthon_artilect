import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import machine from "../static/machine.json";
import PhotoMachine from "../components/photoMachine";
import "../styles/Accueil.css";

function Accueil() {

  const [machineData, setMachine] = useState([])

  useEffect(() => {
      setMachine(machine)
  }, [])

  return (
      <div>
          {machineData.map(item =>
              <PhotoMachine
                  description={item.intro_sentence}
                  photo={item.url_photo}
                  name={item.user_name}
              />
          )
          }
          <p>aaaaaaaaah</p>
      </div>
  )
}

export default Accueil;
