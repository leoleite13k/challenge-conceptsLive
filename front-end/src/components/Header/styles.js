import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 60px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background: #2272a1;

  button {
    padding: 5px 20px;
    font-size: 20px;
    border: 1px solid #eee;
    font-weight: bold;
    text-decoration: none;
    color: #eee;
    background: #2272a1;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#2272a1')};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: 400;
    color: #eee;
  }

  div {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-left: 10px;
    background: ${props => props.bg || '#eee'};
  }
`;
