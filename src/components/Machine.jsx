import React, { useState, useEffect } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";
import { useParams } from "react-router-dom";
import PrincipalTitle from "../components/PrincipalTitle";
import styled from "styled-components";
import PrincipalButton from "../components/PrincipalButton";
import axios from "axios";
import "../styles/MachinePage.css";
import MachineElipse from "../img/machineelipse.png"

function Machine() {
  const Img = styled.img`
  
  }
`;

  let { id } = useParams();
  console.log("id ===> " + id);
  const [machineData, setMachine] = useState([]);

  useEffect(() => {
    console.log("coucou 2");
    const url = `http://localhost:5000/api/machines/${id}`;
    axios
      .get(url)
      .then(response => response.data[0])
      .then(machineArray => setMachine(machineArray));
  }, []);

  return (
    <div>
      <div className="container-machine">
        <PrincipalTitle textTitle={machineData.name} />
        <div className="container-machine-profile"></div>
          <img src={machineData.url_photo} className="photo-machine" />
          {/* <img src={MachineElipse} className="matiere" /> */}
        <h2>Description :</h2>
        <div className="container-description">
          <p className="description">{machineData.description}</p>
        </div>
        <PrincipalButton textButton="Comment m'utiliser" />
        <a href={machineData.notice} target="_blank" >Télécharge mon manuel </a>
        <PrincipalButton textButton="Mes makers" />
        <p>liste des makers</p>
        <PrincipalButton textButton="Mes réalisations" />
        <p>liste des projets</p>
      </div>
    </div>
  );
}

export default Machine;
