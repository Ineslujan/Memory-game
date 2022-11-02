import React, { useEffect, useState } from 'react';
import './app.scss';
import ProgressBar from '../../1-ATOMS/ProgressBar/ProgressBar';

import data from '../../../datas/cards.json';

import Board from '../../3-ORGANISMS/Board/Board';
import EndGame from '../../2-MOLECULES/EndGame/EndGame';
import Home from '../../2-MOLECULES/Home/Home';

function App() {
  const [second, setSecond] = useState<number>(data.timer);
  const [points, setPoints] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(true);
  const [startGame, setStartGame] = useState<boolean>(false);

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
      setSecond(data.timer);
      setEndGame(false);
    }
  }, [startGame]);

  return (
    <main className="App">
      {(endGame && (points === 8 || second <= 0))
        && <EndGame points={points} setStartGame={setStartGame} />}
      {(endGame && points === 0 && second === data.timer)
        && <Home setStartGame={setStartGame} />}
      <Board endGame={endGame} startGame={startGame} setPoints={setPoints} points={points} />
      <ProgressBar endGame={endGame} second={second} setSecond={setSecond} />
    </main>
  );
}

export default App;
