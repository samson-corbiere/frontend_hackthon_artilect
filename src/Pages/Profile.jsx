import React, { useEffect, useState } from "react";
import PhotoMaker from "../components/PhotoMaker";
import PrincipalButton from "../components/PrincipalButton";
import '../styles/Profile.css';
import CardSquare from "../components/CardSquare";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {

    const { id } = useParams()

    const [profileData, setProfile] = useState([])
    const [competenceData, setCompetenceData] = useState([])
    const [personalityData, setPersonalityData] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/api/userProjects/${id}`)
            .then(res => res.data)
            .then(data => setProfile(data))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/competences/user/${id}`)
            .then(res => res.data)
            .then(data => setCompetenceData(data))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/personalities/user/${id}`)
            .then(res => res.data)
            .then(data => setPersonalityData(data))
    }, [])

    if (profileData.length === 0 || competenceData === 0) return "LOADING"
    else
        return (
            <div style={{ margin: "auto" }}>
                <div className="container-profile">
                {personalityData.map(e => 
                    e.id == id ?
                    <PhotoMaker
                        user_name={profileData[0].user_name}
                        photo={profileData[0].url_photo}
                        personality_name={e.name}
                        personality_url={e.url}
                    />
                    :
                    ""
                )}

                    <h2 className="name">{profileData[0].user_name}</h2>
                    {competenceData.map(e =>
                            e.id == id ?
                        <div className="container-competence">
                            <p className="competence">{e.competence_name}</p>
                        </div>
                        :
                        ""
                    )}
                    <h2>
                        Mes Projets
                    </h2>

                    {
                        profileData.map(item =>
                            <div className="container-projects-profile">
                                <CardSquare image_project={item.image}
                                    title={item.project_name}
                                    status={item.status}
                                />

                            </div>
                        )
                    }

                    < PrincipalButton textButton="Contacter sur Discord" />
                    <PrincipalButton textButton="Envoyer un e-mail" />
                </div>

            </div>

        )
}

export default Profile;
