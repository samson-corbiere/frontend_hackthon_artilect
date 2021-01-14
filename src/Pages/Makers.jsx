import React, { useEffect, useState } from 'react';
import CardSquareUser from '../components/CardSquareUser';
import { Link } from "react-router-dom";
import PrincipalTitle from '../components/PrincipalTitle';
import styled from 'styled-components';
import axios from "axios";

const CardsContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around
`

function ProjectsList() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/userProjects')
            .then(res => res.data)
            .then(data => setUserData(data))
    }, [])

    return (
        <div>
            <PrincipalTitle textTitle={"Les makers"} />
            <CardsContainer>
                {userData.map(item =>
                    <>
                        <Link to={`/profil/${item.id}`}>
                            <CardSquareUser
                                photo_maker={item.url_photo}
                                title={item.user_name} />
                        </Link>

                    </>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;