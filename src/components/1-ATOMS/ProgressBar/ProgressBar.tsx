import React from 'react';

import './progressBar.scss';

type PropsType = {
  second: number,
  setSecond: React.Dispatch<React.SetStateAction<number>>,
  endGame: boolean,
  defaultSecond: number
};

function ProgressBar({
  defaultSecond, second, setSecond, endGame,
}: PropsType) {
  const percentTime = (second * 100) / defaultSecond;

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
