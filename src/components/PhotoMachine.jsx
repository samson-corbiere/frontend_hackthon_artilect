import React, { Image } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Link
} from "react-router-dom";

function PhotoMachine({ photo, intro, name, id }) {
  const pathWithId = "/machine/" + id;
  return (
    <div className="container">
      <Link to={`/machine/${id}`}>
        <div>{intro}</div>
        <img src={photo} alt={name} className="photo-machine" />
      </Link>
      ;
    </div>
  );
}

export default PhotoMachine;

/* 
<div className='container'>
      <img src={photo} alt={name} className="machine" />
      <div>{intro}</div>
    </div>
*/
