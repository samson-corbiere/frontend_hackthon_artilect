import React from 'react';
import "../styles/PhotoMaker.css";

function PhotoMaker ({photo, description, name}) {
  return (
    <div className='container'>
      <img src={photo} alt={name} className="photo-machine" />
      <div>{description}</div>
    </div>
  );
}

export default PhotoMaker;