import React from 'react';
import PropTypes from 'prop-types';

import { Container, Logo, Logout } from './styles';

export default function Header({ loading }) {
  return (
    <Container>
      <Logo bg={!loading && '#f00'}>
        <h1>Live</h1>
        <div />
      </Logo>
      <Logout to="/">Sair</Logout>
    </Container>
  );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};
