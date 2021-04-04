// eslint-disable-next-line no-unused-vars
import React, { ButtonHTMLAttributes } from 'react';
import { AddPlayer } from './style';
import { IoPersonAdd } from 'react-icons/io5';

export const AddButon = ({ ...ButtonHTMLAttributes }) => {
  return (
    <AddPlayer {...ButtonHTMLAttributes}>
      <div>
        <IoPersonAdd />
      </div>
      <small>Adicionar jogador</small>
    </AddPlayer>
  );
};
