import styled, { keyframes, css } from 'styled-components';
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.loading
      ? css`
          svg {
            margin-left: 20px;
            animation: ${rotate} 2s linear infinite;
          }
        `
      : css`
          div {
            height: 30px;
            width: 30px;
            margin-left: 20px;
          }
        `}

  button {
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
  }
`;
