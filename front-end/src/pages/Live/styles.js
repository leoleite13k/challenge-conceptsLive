import styled from 'styled-components';

export const Container = styled.div``;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;

  h1 {
    font-family: Roboto, sans-serif;
    color: #eee;
  }

  div {
    width: 70%;
    height: 50%;
    padding: 5px;
    margin-top: 20px;
    box-shadow: 0px 0px 3px -2px rgba(250, 250, 250, 0.77);
  }
`;
