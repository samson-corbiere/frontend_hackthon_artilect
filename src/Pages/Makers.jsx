import React, { useEffect, useState } from 'react';
import CardSquareUser from '../components/CardSquareUser';
import PrincipalTitle from '../components/PrincipalTitle';
import data from "../static/user.json";
import styled from 'styled-components';

const CardsContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around
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
                        <CardSquareUser
                            photo_user={e.photo}
                            name={e.name}
                            machine={e.machine.map(item => item.url_photo)}
                            name_machine={e.machine.map(item => item.pseudo)} />
                    </>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;