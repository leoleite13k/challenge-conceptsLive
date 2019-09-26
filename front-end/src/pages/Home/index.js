import React from 'react';

import { Container, Logo, Button } from './styles';

export default function Home() {
  return (
    <Container>
      <Logo>
        <span>Live</span>
        <div />
      </Logo>
      <Button to="/live">Entrar</Button>
    </Container>
  );
}
