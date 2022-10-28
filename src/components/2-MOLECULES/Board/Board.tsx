import React, { useEffect, useState } from 'react';

import data from '../../../datas/cards.json';
import { CardType } from '../../../interfaces/Cards';
import Card from '../../1-ATOMS/Card/Card';

import './Board.scss';

function Board() {
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const [firstCardSelected, setFirstCardSelected] = useState<CardType>();
  const [secondCardSelected, setSecondCardSelected] = useState<CardType>();
  const { backCard } = data;

  useEffect(() => {
    const dataToSort = [...data.cards];
    const shuffledDatas = dataToSort.sort(() => Math.random() - 0.5);

    console.log(shuffledDatas);

    setShuffledCards([...shuffledDatas]);
  }, []);

  const modifyFlipFindCard = (flipOrFind : string) => {
    if (flipOrFind === 'flip') {
      (firstCardSelected as CardType).flip = false;
      (secondCardSelected as CardType).flip = false;
    } else if (flipOrFind === 'find') {
      (firstCardSelected as CardType).find = true;
      (secondCardSelected as CardType).find = true;
    }

    const firstAndSecond = [firstCardSelected, secondCardSelected];
    const modifyShuffleCards = shuffledCards.map((card) => (
      firstAndSecond.find((o) => (o as CardType).id === card.id) || card));

    setShuffledCards([...modifyShuffleCards]);

    setFirstCardSelected(undefined);
    setSecondCardSelected(undefined);
  };

  if (firstCardSelected?.name && secondCardSelected?.name) {
    console.log(firstCardSelected?.name, secondCardSelected?.name);

    if (firstCardSelected?.name === secondCardSelected?.name) {
      modifyFlipFindCard('find');
    } else {
      modifyFlipFindCard('flip');
    }
  }

  return (
    <section className="board" data-active={secondCardSelected ? 'no' : 'yes'}>
      {shuffledCards.map((card: CardType) => (
        <Card
          key={card.id}
          cardName={card.name}
          cardId={card.id}
          cardFlip={card.flip}
          cardFind={card.find}
          backCard={backCard}
          shuffledCards={shuffledCards}
          firstCardSelected={firstCardSelected}
          setFirstCardSelected={setFirstCardSelected}
          setSecondCardSelected={setSecondCardSelected}
          setShuffledCards={setShuffledCards}
        />
      ))}
    </section>
  );
}

export default Board;
