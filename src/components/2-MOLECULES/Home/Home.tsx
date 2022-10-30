import React from 'react';
import Instructions from '../../1-ATOMS/Instructions/Instructions';
import Start from '../../1-ATOMS/Start/Start';

import './home.scss';

type PropsType = {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
};

function Home({ setStartGame }: PropsType) {
  return (
    <section className="interface">
      <Start setStartGame={setStartGame} />
      <Instructions />
    </section>
  );
}

export default Home;
