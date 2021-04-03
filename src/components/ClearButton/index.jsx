import React from 'react';
import { Clear } from './style';
import { MdClearAll } from 'react-icons/md';

export const ClearButton = () => {
  return (
    <Clear>
      <div>
        <MdClearAll />
      </div>
      <small>Limpar</small>
    </Clear>
  );
};
