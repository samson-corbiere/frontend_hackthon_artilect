import React, { useState, useEffect } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";

function Machine() {
  const [machineData, setProfile] = useState([]);

  useEffect(() => {
    const machine = machineDataJson;
    setProfile(machine);
  }, []);

  return (
    <div>
      {machineData.map(item => (
        <PhotoMaker
          user_name={item.name}
          photo={item.url_photo}
        />
      ))}
    </div>
  );
}

export default Machine;
