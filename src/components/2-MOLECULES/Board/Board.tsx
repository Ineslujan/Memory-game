import React, { useEffect, useState } from 'react';

import data from '../../../datas/cards.json';
import { CardType } from '../../../interfaces/Cards';
import Card from '../../1-ATOMS/Card/Card';

import './Board.scss';

function Board() {
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);

  useEffect(() => {
    const dataToSort = [...data.cards];
    const shuffledDatas = dataToSort.sort(() => Math.random() - 0.5);
    console.log(data.cards, shuffledDatas);
    setShuffledCards([...shuffledDatas]);
  }, []);

  return (
    <section className="board">
      {shuffledCards.map((card: CardType) => <Card key={card.id} cardName={card.name} />)}
    </section>
  );
}

export default Board;
