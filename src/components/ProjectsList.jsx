import React, { useEffect, useState } from 'react';
import CardSquare from './CardSquare';
import PrincipalTitle from './PrincipalTitle';
import data from "../static/projet.json";
import styled from 'styled-components';

const CardContainer = styled.div`
    border: solid 1px red
`
const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around
`

function ProjectsList() {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        setProjectData(data)
    }, [])

    return (
        <div>
            <PrincipalTitle textTitle={"Les projets"} />
            <CardsContainer>

                {projectData.map(e =>
                    <CardContainer>
                        <CardSquare
                            image_project={e.photo_link}
                            title={e.name}
                            status={e.status}
                            photo_machine={e.machine.map(item => item.url_photo)}
                            name_machine={e.machine.map(item => item.pseudo)} />
                    </CardContainer>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;