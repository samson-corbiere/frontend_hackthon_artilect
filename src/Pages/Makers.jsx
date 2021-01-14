import React, { useEffect, useState } from 'react';
import CardSquare from '../components/CardSquare';
import PrincipalTitle from '../components/PrincipalTitle';
import data from "../static/user.json";
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around
`

function ProjectsList() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        setUserData(data)
    }, [])

    return (
        <div>
            <PrincipalTitle textTitle={"Les makers"} />
            <CardsContainer>
                {userData.map(e =>
                    <>
                        <CardSquare
                            image_project={e.photo_link}
                            title={e.name}
                            status={e.status}
                            photo_machine={e.machine.map(item => item.url_photo)}
                            name_machine={e.machine.map(item => item.pseudo)} />
                    </>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;