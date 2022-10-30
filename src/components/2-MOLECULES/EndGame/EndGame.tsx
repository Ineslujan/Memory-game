import React from 'react';
import Result from '../../1-ATOMS/Result/Result';
import Start from '../../1-ATOMS/Start/Start';

type PropsType = {
  points : number,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
};

function EndGame({ points, setStartGame }: PropsType) {
  const message = points === 8 ? 'Bravo' : 'Dommage...';

  return (
    <section className="interface">
      <Result message={message} />
      <Start setStartGame={setStartGame} />
    </section>
  );
}

export default EndGame;
