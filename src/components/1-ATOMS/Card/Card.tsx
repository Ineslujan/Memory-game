import React from 'react';
import { CardType } from '../../../interfaces/Cards';

import './Card.scss';

type Props = {
  cardName: string,
  cardId: number,
  cardFlip: boolean,
  cardFind: boolean,
  backCard: string,
  firstCardSelected: CardType | undefined,
  shuffledCards: CardType[],
  setFirstCardSelected: React.Dispatch<React.SetStateAction<CardType | undefined>>,
  setSecondCardSelected: React.Dispatch<React.SetStateAction<CardType | undefined>>,
  setShuffledCards: React.Dispatch<React.SetStateAction<CardType[]>>

};

function Card({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cardName,
  cardId,
  cardFlip,
  cardFind,
  backCard,
  firstCardSelected,
  shuffledCards,
  setFirstCardSelected,
  setSecondCardSelected,
  setShuffledCards,
}: Props) {
  const imageName = cardName.slice(7).split('.jpg')[0];

  const handleClick = () => {
    const findCard = shuffledCards.find((card) => cardId === card.id);
    (findCard as CardType).flip = true;

    setShuffledCards([...shuffledCards]);

    if (!firstCardSelected) {
      setFirstCardSelected(findCard);
    } else {
      setSecondCardSelected(findCard);
    }
  };
  const card = (cardFlip && cardFind) || (cardFlip && !cardFind);

  return (
    <button type="button" className="card" data-find={card ? 'yes' : 'no'} onClick={handleClick}>
      <img src={card ? cardName : backCard} alt={card ? `${imageName} card` : 'Back card'} className="card-img" data-name={card ? imageName : 'back'} />
    </button>
  );
}

export default Card;
