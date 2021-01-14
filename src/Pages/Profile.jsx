import React, { useEffect, useState } from "react";
import userdata from "../static/user.json";
import PhotoMaker from "../components/PhotoMaker"

function Profile() {

    const [profileData, setProfile] = useState([])

    useEffect(() => {
        const user = userdata
        setProfile(user)
    }, [])

    return (
        <div>
            {profileData.map(item =>
                <PhotoMaker
                    user_name={item.name}
                    photo={item.photo}
                    personality_name={item.personality.name}
                    personality_url={item.personality.url}
                />
            )
            }
        </div>
    )
}

export default Profile;
