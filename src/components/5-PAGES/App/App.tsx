import React, { useEffect, useState } from 'react';
import './app.scss';
import ProgressBar from '../../1-ATOMS/ProgressBar/ProgressBar';

import getDatas from '../../../requests/getDatas';

import Board from '../../3-ORGANISMS/Board/Board';
import EndGame from '../../2-MOLECULES/EndGame/EndGame';
import Home from '../../2-MOLECULES/Home/Home';
import { CardType, ObjectType } from '../../../interfaces/Cards';

function App() {
  const [defaultSecond, setDefaultSecond] = useState<number>(0);
  const [cards, setCards] = useState<CardType[]>([]);
  const [backCard, setBackCard] = useState<string>('');
  const [second, setSecond] = useState<number>(1);
  const [points, setPoints] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(true);
  const [startGame, setStartGame] = useState<boolean>(false);

  const dataJson = async () => {
    const datas: ObjectType | null = await getDatas();
    if (datas) {
      setDefaultSecond(datas.timer);
      setSecond(datas.timer);
      setCards(datas.cards);
      setBackCard(datas.backCard);
    } else {
      return;
    }
    console.log('hhhhh', datas.timer, datas.cards, datas.backCard);
  };

  useEffect(() => {
    dataJson();
  }, []);

  useEffect(() => {
    if (second <= 0 || points === 8) {
      console.log('app endgame');

      setEndGame(true);
      setStartGame(false);
    }
  }, [second, points]);

  useEffect(() => {
    if (startGame) {
      console.log('app start');
      setPoints(0);
      setSecond(defaultSecond);
      setEndGame(false);
    }
  }, [startGame]);

  return (
    <main className="App">
      {(endGame && (points === 8 || second <= 0))
        && <EndGame points={points} setStartGame={setStartGame} />}
      {(endGame && points === 0 && second === defaultSecond)
        && <Home second={second} setStartGame={setStartGame} />}
      <Board
        endGame={endGame}
        backCard={backCard}
        cards={cards}
        startGame={startGame}
        setPoints={setPoints}
        points={points}
      />
      <ProgressBar
        endGame={endGame}
        second={second}
        defaultSecond={defaultSecond}
        setSecond={setSecond}
      />
    </main>
  );
}

export default App;
