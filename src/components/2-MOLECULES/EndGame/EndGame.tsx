import React from 'react';
import Result from '../../1-ATOMS/Result/Result';
import Start from '../../1-ATOMS/Start/Start';

type PropsType = {
  points : number
};

function EndGame({ points }: PropsType) {
  const message = points === 8 ? 'Bravo' : 'Dommage...';

  return (
    <section className="endGame">
      <Result message={message} />
      <Start />
    </section>
  );
}

export default EndGame;
