import React from 'react';

import './result.scss';

type PropsType = {
  message: string,
};

function Result({ message }:PropsType) {
  return (
    <p className="message">{message}</p>
  );
}

export default Result;
