
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import PrincipalButton from "./PrincipalButton";
import styled from 'styled-components'
import "../styles/ProjectMachineUser.css"



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
          <h1 className="title">{projectPage.project_name}</h1>
          <div className="divPhotoProject">
            <img className="photoProject" src={projectPage.image} alt={projectPage.project_name} style={{width:"80%"}}/>
          </div>
          <div className="container-container-photo-profile">
            <div className="container-photo-profile">
              <img className="photo-user-project" src={projectPage.url_photo} alt={projectPage.user_name}/>
            </div>
            <p>{projectPage.user_name}</p>
          </div>
          <p className="descriptionClass">description :</p>
          <p className="descriptionProject">{projectPage.description}</p>
          <div className="centerbutton">
            <a href={projectPage.project_discord_link}>
              <button className="buttonProject">Lien discord</button>
            </a>   
            <a href={projectPage.email}>
              <button className="buttonProject">Adresse e-mail</button>
            </a>  
          </div>
        </div>
        );
}


export default ProjectMachineUser;
