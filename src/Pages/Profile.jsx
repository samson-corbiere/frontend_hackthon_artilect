import React, { useEffect, useState } from "react";
import userdata from "../static/user.json";
import PhotoMaker from "../components/PhotoMaker";
import PrincipalButton from "../components/PrincipalButton";
import '../styles/Profile.css';
import CardSquare from "../components/CardSquare";
import { useParams } from "react-router-dom";

function Profile() {

    const { id } = useParams()

    const [profileData, setProfile] = useState([])

    useEffect(() => {
        setProfile(userdata)
    }, [])

    return (
        <div style={{ margin: "auto" }}>
            {profileData.map(item =>
                item.id == id ?
                    <div className="container">
                        <input type="button" value="Edit" className="button-edit" />
                        <PhotoMaker
                            user_name={item.name}
                            photo={item.photo}
                            personality_name={item.personality.name}
                            personality_url={item.personality.url}
                        />
                        <h2 className="name">{item.name}</h2>
                        <div className="container-competence">
                            {item.competence.map(comp =>
                                <p className="competence">{comp.name}</p>
                            )}
                        </div>
                        <h2>
                            Mes Projets
                    </h2>
                        <CardSquare />
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

export default Profile;
