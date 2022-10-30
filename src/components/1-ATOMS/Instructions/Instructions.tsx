import React from 'react';

import data from '../../../datas/cards.json';

function Instructions() {
  const minutesRest = data.timer % 60;
  const minutes = Math.floor(data.timer / 60);

  return (
    <p>Vous avez {minutes}{minutesRest !== 0 && `:${minutesRest}`} minutes pour matcher toutes les cartes</p>
  );
}

export default Instructions;
