import React, { useEffect, useState } from "react";
import userdata from "../static/projet.json";
import PrincipalButton from "../components/PrincipalButton";
import PrincipalTitle from "../components/PrincipalTitle"
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import PhotoMaker from "../components/PhotoMaker";
import "../styles/projet.css"


function Project() {

    const Img = styled.img`
  width: 120%;
  top: 50%;
  left: 50%;

  }
`
    const { id } = useParams()

    const [projectData, setProject] = useState([])

    useEffect(() => {
        setProject(userdata)
    }, [])

    return (
        <div style={{ margin: "auto" }}>
            {projectData.map(item =>
                item.id == id ?
                    <div className="container">
                        <PrincipalTitle textTitle={item.name} />
                        <Img src={item.photo_link} />
                        <div className="name-project">
                            <PhotoMaker photo={item.user.map(e => e.photo)} />
                            <h2 className="name">{item.user.map(e => e.name)}</h2>
                        </div>
                        <div>{item.description}</div>
                        <PrincipalButton textButton="Contacter sur Discord" />
                        <PrincipalButton textButton="Envoyer un e-mail" />

                    </div>
                    :
                    <div>
                    </div>
            )}

        </div>

    )
}

export default Project;
