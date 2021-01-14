import React, { useEffect, useState } from "react";
import userdata from "../static/user.json";
// import PhotoMaker from "./PhotoMaker"

function Profile() {

    const [profileData, setProfile] = useState([])

    useEffect(() => {
        const user = userdata
        setProfile(user)
    }, [])

    return (
        <div>
            {profileData.map(item =>
                item.competence.map(e =>
                    <>
                        {/* <PhotoMaker user_name= {e.name} 
                        photo={item.photo} 
                        personality_name={item.personality.map(e => {e.name})} 
                        personality_url={item.personality.map(e => {e.url})} /> */}

                        <div className="user-competence"> {e.name} </div>
                    </>
                ))}
        </div>
    )
}

export default Profile;
