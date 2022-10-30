import React, { useEffect, useState } from 'react';
import './app.scss';
import ProgressBar from './components/1-ATOMS/ProgressBar/ProgressBar';

import data from './datas/cards.json';

import Board from './components/3-ORGANISMS/Board/Board';
import EndGame from './components/2-MOLECULES/EndGame/EndGame';
import Home from './components/2-MOLECULES/Home/Home';

function App() {
  const [second, setSecond] = useState<number>(data.timer);
  const [points, setPoints] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  useEffect(() => {
    if (second <= 0 || points === 8) {
      console.log('app endgame');

      setEndGame(true);
    }
  }, [second, points]);

  return (
    <main className="App">
      {endGame && <EndGame points={points} />}
      <Home />
      <Board endGame={endGame} setPoints={setPoints} points={points} />
      <ProgressBar endGame={endGame} second={second} setSecond={setSecond} />
    </main>
  );
}

export default App;
