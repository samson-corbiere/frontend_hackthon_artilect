import React, { useState, useEffect } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";
import { useParams } from "react-router-dom";
import PrincipalTitle from "../components/PrincipalTitle";
import styled from "styled-components";
import PrincipalButton from "../components/PrincipalButton";
import axios from "axios";
import "../styles/PageMachine.css";

function Machine() {
  const Img = styled.img`
  width: 120%;
  top: 50%;
  left: 50%;
  }
`;

  let { id } = useParams();
  console.log("id ===> " + id);
  const [machineData, setMachine] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/machine/${id}`;
    axios
      .get(url)
      .then((response) => response.data[0])
      .then((machineArray) => setMachine(machineArray));

  }, []);

  return (
    <div>
      <div className="containerr">
        <PrincipalTitle textTitle={machineData.name} />
        <div className="imgDiv">
          <Img src={machineData.url_photo} className="machineImg" />
        </div>
        <p>Description :</p>
        <div>{machineData.description}</div>
        <PrincipalButton textButton="Comment m'utiliser" />
        <PrincipalButton textButton="Mes makers" />
        <p>liste des makers</p>
        <PrincipalButton textButton="Mes réalisations" />
        <p>liste des projets</p>
      </div>
    </div>
  );
}

export default Machine;
