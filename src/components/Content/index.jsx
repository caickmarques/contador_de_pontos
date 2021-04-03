import React from 'react';
import { CardUser } from '../CardUser';
import { Container } from './style';

export const Content = () => {
  return (
    <Container>
      <CardUser name="Caick" />
      <CardUser name="Solon" />
      <CardUser name="Vanusa" />
      <CardUser name="Alexia" />
    </Container>
  );
};
