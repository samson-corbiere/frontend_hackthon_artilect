import React, { useEffect, useState } from 'react';
import CardSquareUser from '../components/CardSquareUser';
import { Link, useParams } from "react-router-dom";
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
    const [personalityData, setPersonalityData] = useState([])

    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:5000/api/personalities/user/${id}`)
            .then(res => res.data)
            .then(data => setPersonalityData(data))
    }, [])

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
                        <Link to={`/profil/${item.id}`}  style={{ textDecoration: "none" }}>
                            <CardSquareUser
                                photo_maker={item.url_photo}
                                title={item.user_name}
                                bookmark={personalityData.map(item => item.url)} />
                        </Link>

                    </>
                )}
            </CardsContainer>
        </div>
    )
}

export default ProjectsList;