import React from 'react';
import { Play } from './style';
import { AiFillPlayCircle } from 'react-icons/ai';

export const PlayButton = () => {
  return (
    <Play>
      <div>
        <AiFillPlayCircle />
      </div>
      <small>Iniciar</small>
    </Play>
  );
};
