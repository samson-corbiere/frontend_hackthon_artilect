import React from 'react';

function PhotoMachine ({photo, intro, name}) {
  return (
    <div className='container'>
      <img src={photo} alt={name} className="machine" />
      <div>{intro}</div>
    </div>
  );
}

export default PhotoMachine;