import React, { useState, useEffect } from 'react';
import PlayerYoutube from 'react-youtube';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Video } from './styles';

import Header from '../../components/Header';

export default function Live() {
  const [liveId, setLiveId] = useState('');
  const [liveTitle, setLiveTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function getLive() {
      setLoading(true);

      try {
        const video = await api.get('/live');
        const { data } = video;
        const { snippet, id } = data;
        const { title } = snippet;

        setLiveId(id);
        setLiveTitle(title);
        setLoading(false);
      } catch (err) {
        toast.error('Não foi possível encontrar a live !');
      }
    }

    getLive();
  }, []);

  return (
    <Container>
      <Header loading={loading} />
      <Video>
        <h1>{liveTitle}</h1>
        <PlayerYoutube videoId={liveId} opts={opts} />
      </Video>
    </Container>
  );
}
