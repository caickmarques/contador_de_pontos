import React, { useState } from 'react';

import { Container } from './style';
import { MainHeader } from '../../components/MainHeader';
import { Content } from '../../components/Content';
import { CardUser } from '../../components/CardUser';
import { Footer } from '../../components/Footer';
import { ClearButton } from '../../components/ClearButton';
import { AddButon } from '../../components/AddButton';
import { PlayButton } from '../../components/PlayButton';

export const MainPage = () => {
  const [playerList, setPlayerList] = useState([]);

  function addNewPlayer(name) {
    setPlayerList([...playerList, name]);
  }

  return (
    <Container>
      <MainHeader />
      <Content>
        {playerList.map((item, index) => (
          <CardUser key={index} name={item} />
        ))}
      </Content>
      <Footer>
        <ClearButton
          onClick={() => {
            setPlayerList([]);
          }}
        />

        <AddButon
          onClick={() => {
            const name = prompt('Novo jogador');
            addNewPlayer(name);
          }}
        />
        <PlayButton />
      </Footer>
    </Container>
  );
};
