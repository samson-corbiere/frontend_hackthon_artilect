import React, {Image} from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Link
} from "react-router-dom";

function PhotoMachine({ photo, intro, name, id }) {
  const pathWithId = "/machine/"+id
  return (
    <div className="container">
      <Link to={pathWithId}>
        <img src={photo} alt={name} className="photo-machine"/>  
      </Link>;
    </div>
  );
}

export default PhotoMachine;
