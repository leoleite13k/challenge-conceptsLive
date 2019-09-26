import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const bounce = keyframes`
  0% {margin-bottom: 0px;}
  50% {margin-bottom: 50px;}
  100% {margin-bottom: 0px;}
`;

export const Logo = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  padding: 20px;

  span {
    font-family: Roboto, sans-serif;
    font-size: 100px;
    font-weight: 400;
    margin: 0px 20px;
    color: #eee;
  }

  div {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 0 auto;
    background: #2272a1;
    animation: ${bounce} 2s infinite;
  }
`;

export const Button = styled(Link)`
  padding: 20px;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #eee;
  background: #2272a1;

  display: flex;
  align-items: center;
  transition: background 0.2s; // Tempo que demora para escurecer o background

  &:hover {
    background: ${darken(0.05, '#2272a1')};
  }
`;
