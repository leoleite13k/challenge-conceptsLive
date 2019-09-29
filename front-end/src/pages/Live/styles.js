import styled from 'styled-components';

export const Container = styled.div``;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0px;

  h1 {
    font-family: Roboto, sans-serif;
    margin-bottom: 20px;
    color: #eee;
  }

  div {
    width: 1280px;
    height: 600px;
    box-shadow: 0px 0px 3px -2px rgba(250, 250, 250, 0.77);
  }
`;
