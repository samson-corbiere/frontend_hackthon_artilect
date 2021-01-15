import React, { useEffect, useState } from 'react';
import CardSquareUser from '../components/CardSquareUser';
import { Link } from "react-router-dom";
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
                        <Link to="/profil">
                            <CardSquareUser
                                photo_maker={e.photo}
                                title={e.name}/>
                        </Link>

                    </>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;