import React from 'react';
import users from '../../repositories/users';
import { Container } from './style';
import { MainHeader } from '../../components/MainHeader';
import { Content } from '../../components/Content';
import { CardUser } from '../../components/CardUser';
import { Footer } from '../../components/Footer';
import { ClearButton } from '../../components/ClearButton';
import { AddButon } from '../../components/AddButton';
import { PlayButton } from '../../components/PlayButton';

export const MainPage = () => {
  return (
    <Container>
      <MainHeader />
      <Content>
        {users.map((item) => (
          <CardUser name={item.name} key={item.id} />
        ))}
      </Content>
      <Footer>
        <ClearButton />
        <AddButon />
        <PlayButton />
      </Footer>
    </Container>
  );
};
