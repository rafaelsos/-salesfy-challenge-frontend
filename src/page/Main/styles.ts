import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  img {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-left: 8px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  padding: 20px;
  margin-top: 10px;

  width: 400px;
  height: 200px;
  background: #fff;

  input {
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: #f0f0f0;
    text-align: center;
    width: 250px;
    height: 40px;

    &::placeholder {
      color: #dedede;
      font-size: 14px;
    }
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: #565656;
    margin-bottom: 10px;
  }

  strong {
    height: 60px;
  }

  button {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: rgb(138, 5, 170);
    color: #fff;
    text-align: center;
    width: 250px;
    height: 40px;
    margin-top: auto;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, 'rgb(138, 5, 170)')};
    }
  }
`;
