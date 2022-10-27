import React from 'react';

import './Card.scss';

type Props = {
  cardName: string,
};

function Card({ cardName }:Props) {
  return (
    <button type="button" className="card">
      <img src={cardName} alt="Pair to dicover" className="card-img" />
    </button>
  );
}

export default Card;
