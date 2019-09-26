import React from 'react';

import { Container, Player } from './styles';

import Header from '../../components/Header';

export default function Live() {
  return (
    <Container>
      <Header />
      <Player>
        <h1>Titulo</h1>
        <div />
      </Player>
    </Container>
  );
}
