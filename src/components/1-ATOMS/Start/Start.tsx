import React from 'react';

import './start.scss';

type PropsType = {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
};

function Start({ setStartGame }:PropsType) {
  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <button type="button" className="startButton" onClick={handleClick}>Start !</button>
  );
}

export default Start;
