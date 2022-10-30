import React from 'react';

import './ProgressBar.scss';

type PropsType = {
  second: number,
  setSecond: React.Dispatch<React.SetStateAction<number>>

};

function ProgressBar({ second, setSecond }:PropsType) {
  const percentTime = (second * 100) / 120;

  setTimeout(() => {
    const newSecond = second - 0.1;
    setSecond(newSecond);
  }, 100);

  return (
    <div className="time">
      <div className="time-remain" style={{ width: `${percentTime}%` }} />
    </div>
  );
}

export default ProgressBar;
