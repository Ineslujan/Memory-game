import React from 'react';

type PropsType = {
  message: string,
};

function Result({ message }:PropsType) {
  return (
    <p>{message}</p>
  );
}

export default Result;
