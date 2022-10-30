import React, { useEffect, useState } from 'react';

import data from '../../../datas/cards.json';
import { CardType } from '../../../interfaces/Cards';
import Card from '../../1-ATOMS/Card/Card';

import './board.scss';

type PropsType = {
  setPoints: React.Dispatch<React.SetStateAction<number>>,
  points: number,
  endGame: boolean
};

function Board({ setPoints, points, endGame }: PropsType) {
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const [firstCardSelected, setFirstCardSelected] = useState<CardType>();
  const [secondCardSelected, setSecondCardSelected] = useState<CardType>();
  const [lockBoard, setLockBoard] = useState<boolean>(false);
  const { backCard } = data;

  useEffect(() => {
    if (endGame) {
      setLockBoard(true);
    }
  }, [endGame]);

  useEffect(() => {
    const dataToSort = [...data.cards];
    const shuffledDatas = dataToSort.sort(() => Math.random() - 0.5);

    console.log(shuffledDatas);

    setShuffledCards([...shuffledDatas]);
  }, []);

  const modifyFlipFindCard = (flipOrFind: string) => {
    if (flipOrFind === 'flip') {
      (firstCardSelected as CardType).flip = false;
      (secondCardSelected as CardType).flip = false;
    } else if (flipOrFind === 'find') {
      (firstCardSelected as CardType).find = true;
      (secondCardSelected as CardType).find = true;
      setPoints(points + 1);
    }

    const firstAndSecond = [firstCardSelected, secondCardSelected];
    const modifyShuffleCards = shuffledCards.map((card) => (
      firstAndSecond.find((o) => (o as CardType).id === card.id) || card));

    setShuffledCards([...modifyShuffleCards]);

    setFirstCardSelected(undefined);
    setSecondCardSelected(undefined);
    setLockBoard(false);
  };

  useEffect(() => {
    if (firstCardSelected?.name && secondCardSelected?.name) {
      console.log(firstCardSelected?.name, secondCardSelected?.name);

      if (firstCardSelected?.name === secondCardSelected?.name) {
        modifyFlipFindCard('find');
      } else {
        modifyFlipFindCard('flip');
      }
    }
  }, [firstCardSelected, secondCardSelected]);

  return (
    <section className="board" data-lock={lockBoard ? 'yes' : 'no'}>
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
          setLockBoard={setLockBoard}
          setFirstCardSelected={setFirstCardSelected}
          setSecondCardSelected={setSecondCardSelected}
          setShuffledCards={setShuffledCards}
        />
      ))}
    </section>
  );
}

export default Board;
