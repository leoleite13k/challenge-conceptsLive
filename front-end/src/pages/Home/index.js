import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Logo, Button } from './styles';

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    try {
      const response = await api.get('/auth');
      const { url } = response.data;
      window.location.assign(url);
    } catch (error) {
      toast.error('Não foi possível se conectar, tente novamente !');
    }

    setLoading(false);
  }

  return (
    <Container>
      <Logo>
        <span>Live</span>
        <div />
      </Logo>
      <Button loading={loading}>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
        {loading ? <FaSpinner size={30} color="#fff" /> : <div />}
      </Button>
    </Container>
  );
}
