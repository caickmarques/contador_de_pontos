// eslint-disable-next-line no-unused-vars
import React, { ButtonHTMLAttributes } from 'react';
import { Clear } from './style';
import { MdClearAll } from 'react-icons/md';

export const ClearButton = ({ ...ButtonHTMLAttributes }) => {
  return (
    <Clear {...ButtonHTMLAttributes}>
      <div>
        <MdClearAll />
      </div>
      <small>Limpar</small>
    </Clear>
  );
};
