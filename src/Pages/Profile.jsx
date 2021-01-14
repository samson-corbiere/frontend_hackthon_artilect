import React, { useEffect, useState } from "react";
import userdata from "../static/user.json";
import PhotoMaker from "../components/PhotoMaker";
import PrincipalButton from "../components/PrincipalButton";
import '../styles/Profile.css';
import cardSquare from "../components/CardSquare";

function Profile() {

    const [profileData, setProfile] = useState([])

    useEffect(() => {
        const user = userdata
        setProfile(user)
    }, [])

    return (
        <div style={{margin:"auto"}}>
            {profileData.map(item =>
                <div className="container">
                    <input type="button" value="Edit" className="button-edit"/>
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
                    <cardSquare />
                    <PrincipalButton textButton="Contacter sur Discord"/>
                    <PrincipalButton textButton="Envoyer un e-mail"/>
                </div>
            )}
        </div>

    )
}

export default Profile;
