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

    useEffect(() => {
        axios.get('http://localhost:5000/api/userProjects')
        .then(res => res.data[0])
        .then(data => setProfile(data))
    }, [])

    return (
        <div style={{ margin: "auto" }}>
                    <div className="container">
                        <PhotoMaker
                            user_name={profileData.user_name}
                            photo={profileData.url_photo}
                            personality_name={profileData.personality_name}
                            personality_url={profileData.personality_url}
                        />
                        <h2 className="name">{profileData.user_name}</h2>
                        <div className="container-competence">
                                <p className="competence">{profileData.competence_name}</p>
                        </div>
                        <h2>
                            Mes Projets
                    </h2>
                        <CardSquare image_project={profileData.image} 
                        title={profileData.project_name} 
                        status={profileData.status} 
                        />
                        <PrincipalButton textButton="Contacter sur Discord" />
                        <PrincipalButton textButton="Envoyer un e-mail" />

                    </div>


        </div>

    )
}

export default Profile;
