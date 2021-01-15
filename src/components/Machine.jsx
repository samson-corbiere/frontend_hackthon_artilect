import React, { useState, useEffect } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";
import { useParams } from "react-router-dom";
import PrincipalTitle from "../components/PrincipalTitle";
import styled from "styled-components";
import PrincipalButton from "../components/PrincipalButton";
import axios from "axios";

function Machine() {
  const Img = styled.img`
  width: 120%;
  top: 50%;
  left: 50%;
  }
`;

  let { id } = useParams();
  console.log("id ===> " +id)
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
      <div className="container">
        <PrincipalTitle textTitle={machineData.name} />
        <Img src={machineData.url_photo} />
        <div>{machineData.description}</div>
        <PrincipalButton textButton="Comment m'utiliser" />
        <PrincipalButton textButton="Mes makers" />
        <PrincipalButton textButton="Mes réalisations" />
      </div>
    </div>
  );
}

export default Machine;
