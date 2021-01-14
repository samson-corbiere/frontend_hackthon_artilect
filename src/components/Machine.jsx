import React, { useState, useEffect } from "react";
import json from "../static/machine";

import PrincipalButton from "./PrincipalButton";

function Machine() {
  const [data, setData] = useState(null);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log("response ==> " +response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return "hello"
  // const [data, setData] = useState(null);

  // const retrieveMachineData = async () => {
  //   let res = await fetch(json);
  //   console.log("res ==> " +res)
  //   let response = await res.json();
  //     setData(response.disclaimer);
  // };

  // return (
  //   <div>
  //     {/* nom / image / description / commnent mutiliser / mes makers / mes realisations  */}
  //     <div>
  //       <p></p>
  //     </div>
  //     <PrincipalButton textButton="salut" />
  //     <PrincipalButton textButton="modifie moi stp" />
  //   </div>
  // );
}

export default Machine;
