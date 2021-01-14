import React from 'react';
import "../styles/PhotoMaker.css";

function PhotoMaker ({personality_name, personality_url, photo, user_name}) {
  return (
    <div className='container'>
      <img src={photo} alt={user_name} className="photo-user" />
      <img src={personality_url} alt={personality_name} className="wood" />
    </div>
  );
}

export default PhotoMaker;