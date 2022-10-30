import React from 'react';

import data from '../../../datas/cards.json';
import './progressBar.scss';

type PropsType = {
  second: number,
  setSecond: React.Dispatch<React.SetStateAction<number>>,
  endGame: boolean
};

function ProgressBar({ second, setSecond, endGame }: PropsType) {
  const percentTime = (second * 100) / data.timer;

  const timeOut = setTimeout(() => {
    const newSecond = second - 0.1;

    setSecond(newSecond);
  }, 100);

  if (second <= 0 || endGame) {
    clearTimeout(timeOut);
  }

  return (
    <div className="time">
      <div className="time-remain" style={{ width: `${percentTime}%` }} />
    </div>
  );
}

export default ProgressBar;
