import React from 'react';
import Instructions from '../../1-ATOMS/Instructions/Instructions';
import Start from '../../1-ATOMS/Start/Start';

import './home.scss';

type PropsType = {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
  second: number
};

function Home({ setStartGame, second }: PropsType) {
  return (
    <section className="interface">
      <Start setStartGame={setStartGame} />
      <Instructions second={second} />
    </section>
  );
}

export default Home;
