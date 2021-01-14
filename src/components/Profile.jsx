import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import userdata from "../user.json";
import PhotoMaker from "./PhotoMaker"

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
                        <PhotoMaker photo={item.photo} personality={item.personality}/>
                        <div className="user-competence"> {e.name} </div>
                    </>
                ))}
        </div>
    )
}

export default Profile;
