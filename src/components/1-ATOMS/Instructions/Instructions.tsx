import React from 'react';

import './instructions.scss';

type PropsType = {
  second: number
};

function Instructions({ second }:PropsType) {
  const minutesRest = second % 60;
  const minutes = Math.floor(second / 60);

  return (
    <p className="instructions">Vous avez <span className="instructions-minutes">{minutes}{minutesRest !== 0 && `:${minutesRest}`} minutes</span> pour matcher toutes les cartes</p>
  );
}

export default Instructions;
