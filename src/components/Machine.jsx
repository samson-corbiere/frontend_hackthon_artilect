import React, { useState, useEffect, Link } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";
import { useParams } from "react-router-dom";
import PrincipalTitle from "../components/PrincipalTitle";
import styled from "styled-components";
import PrincipalButton from "../components/PrincipalButton";
import axios from "axios";
import "../styles/MachinePage.css";
import MachineElipse from "../img/machineelipse.png";
import CardSquareUser from "../components/CardSquareUser";

function Machine() {
  const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
  `;

  let { id } = useParams();
  console.log("id ===> " + id);
  const [machineData, setMachine] = useState([]);
  const [personalityData, setPersonalityData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/machine/${id}`;
    axios
      .get(url)
      .then((response) => response.data[0])
      .then((machineArray) => setMachine(machineArray));

  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projectMachineUser/1`)
      .then(res => res.data)
      .then(data => setPersonalityData(data));
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
        <a href={machineData.notice} target="_blank">
          Télécharge mon manuel{" "}
        </a>
        <PrincipalButton textButton="Mes makers" />
        <CardsContainer
          style={{
            width: "90%",
            whiteSpace: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            flexDirection: "row"
          }}
        >
          {personalityData.map(item => (
            <>
              <CardSquareUser style={{marginRight: "5%"}}
                photo_maker={item.url_photo}
                title={item.user_name}
                bookmark={personalityData.map(item => item.url)}
              />
              {/* </Link> */}
            </>
          ))}
        </CardsContainer>
        <PrincipalButton textButton="Mes réalisations" />
        <p>liste des projets</p>
      </div>
    </div>
  );
}

export default Machine;
