import React from 'react';

import data from '../../../datas/cards.json';

import './instructions.scss';

function Instructions() {
  const minutesRest = data.timer % 60;
  const minutes = Math.floor(data.timer / 60);

  return (
    <p className="instructions">Vous avez <span className="instructions-minutes">{minutes}{minutesRest !== 0 && `:${minutesRest}`} minutes</span> pour matcher toutes les cartes</p>
  );
}

export default Instructions;
