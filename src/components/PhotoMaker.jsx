import React from 'react';
import "../styles/PhotoMaker.css";

function PhotoMaker ({personality_name, personality_url, photo, user_name}) {
  return (
    <div className='container-photo-profile'>
      <img src={photo} alt={user_name} className="photo-user" />
      <img src={personality_url} alt={personality_name} className="matiere" />
    </div>
  );
}

export default PhotoMaker;