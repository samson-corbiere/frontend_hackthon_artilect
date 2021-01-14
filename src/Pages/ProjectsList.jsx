import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CardSquare from '../components/CardSquare';
import PrincipalTitle from '../components/PrincipalTitle';
import data from "../static/projet.json";
import styled from 'styled-components';

const CardsContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around
`

function ProjectsList() {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        setProjectData(data)
    }, [])

    console.log({projectData})
    return (
        <div>
            <PrincipalTitle textTitle={"Les projets"} />
            {projectData.map(e =>
                <CardsContainer>
                    <Link to={`/projet/${e.id}`}>
                        <CardSquare
                            image_project={e.photo_link}
                            title={e.name}
                            status={e.status}
                            photo_machine={e.machine.map(item => item.url_photo)}
                            name_machine={e.machine.map(item => item.pseudo)} />
                    </Link>
                </CardsContainer>
            )}

        </div>
    )
}

export default ProjectsList;