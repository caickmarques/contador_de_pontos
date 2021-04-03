import React from 'react';
import { Container, AddPlayer, Play, Clear } from './style';
import { IoPersonAdd } from 'react-icons/io5';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdClearAll } from 'react-icons/md';

export const Footer = () => {
  return (
    <Container>
      <Clear>
        <div>
          <MdClearAll />
        </div>
        <small>Limpar</small>
      </Clear>
      <AddPlayer>
        <div>
          <IoPersonAdd />
        </div>
        <small>Adicionar jogador</small>
      </AddPlayer>
      <Play>
        <div>
          <AiFillPlayCircle />
        </div>
        <small>Iniciar</small>
      </Play>
    </Container>
  );
};
