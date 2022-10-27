import React from 'react';

import data from '../../../datas/cards.json';
import { CardType } from '../../../interfaces/Cards';
import Card from '../../1-ATOMS/Card/Card';

import './Board.scss';

function Board() {
  return (
    <section className="board">
      {data.cards.map((card: CardType) => <Card key={card.id} cardName={card.name} />)}
    </section>
  );
}

export default Board;
