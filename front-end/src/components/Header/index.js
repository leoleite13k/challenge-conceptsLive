import React from 'react';
import PropTypes from 'prop-types';

import { Container, Logo } from './styles';

export default function Header({ rec }) {
  return (
    <Container>
      <Logo bg={rec && '#f00'}>
        <h1>Live</h1>
        <div />
      </Logo>
      <button type="button">Sair</button>
    </Container>
  );
}

Header.defaultProps = {
  rec: false,
};

Header.propTypes = {
  rec: PropTypes.bool,
};
