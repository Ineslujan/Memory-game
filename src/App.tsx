import React, { useState } from 'react';
import './App.scss';
import ProgressBar from './components/1-ATOMS/ProgressBar/ProgressBar';

import Board from './components/2-MOLECULES/Board/Board';

function App() {
  const [second, setSecond] = useState<number>(120);

  return (
    <main className="App">
      <Board />
      <ProgressBar second={second} setSecond={setSecond} />
    </main>
  );
}

export default App;
