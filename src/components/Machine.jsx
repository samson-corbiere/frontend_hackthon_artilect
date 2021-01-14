import React, { useState, useEffect, Button } from "react";
import machineDataJson from "../static/machine.json";
import PhotoMaker from "../components/PhotoMaker";

function Machine() {
  const [machineData, setProfile] = useState([]);

  useEffect(() => {
    const machine = machineDataJson;
    setProfile(machine);
  }, []);

  // TODO ==> FWHEN WE CALL MACHINE COMPONENT, GIVE ID OF MACHINE IN PROPS
  // FOR RETRIEVE THE GOOD PAGE OF MACHINE

  return (
    <div>
      {machineData.map(item => {
        {
          console.log("in machine 1");
          console.log("item name ==> " +item.name);
        }
        // <p>{item.name}</p>
        <PhotoMaker user_name={item.name} photo={item.url_photo} />;
          <div>
            <p>{item.name}</p>
            <p>{item.notice}</p>
            <ul>
              <li></li>
            </ul>
          </div>;

        // TODO change IF condition with id from props
        if (item.id === 1) {
          
          
        }
      })}
    </div>
  );
}

export default Machine;
