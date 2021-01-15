
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import PrincipalButton from "./PrincipalButton";
import styled from 'styled-components'



function ProjectMachineUser() {

  const PrincipalButton = styled.button`
width: 55%;
height: 29px;
border: none;
background: #659DB8;
border-radius: 10px;
margin: 1%;
font-size: 14px;  
font-family: Roboto;
font-weight: 600;
color: #FFFFF
`

  let {id} = useParams();
    const [projectPage, setProjectPage] = useState([]) 

    useEffect(() => {

      const url = `http://localhost:5000/api/projectMachineUser/${id}`;
      axios.get(url)
      .then((response) => response.data[0])
      .then((projectMachineUserArray) => setProjectPage(projectMachineUserArray))      
    }, [])

        return (
        <div>
          <h1>{projectPage.project_name}</h1>
          <img src={projectPage.image} alt={projectPage.project_name} style={{width:"375px"}}/>
          <img src={projectPage.url_photo} alt={projectPage.user_name} style={{width:"375px"}}/>
          <p>{projectPage.user_name}</p>
          <p>{projectPage.description}</p>
          <a href={projectPage.project_discord_link}>
            <PrincipalButton>Lien discord</PrincipalButton>
          </a>   
          <a href={projectPage.email}>
            <PrincipalButton>Adresse e-mail</PrincipalButton>
          </a>  
        </div>
        );
}


export default ProjectMachineUser;
