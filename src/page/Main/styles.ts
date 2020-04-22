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
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;

  width: 400px;
  height: 230px;
  background: #fff;

  input {
    font-size: 24px;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    background: #f0f0f0;
    text-align: center;
    width: 250px;
    min-height: 40px;

    &::placeholder {
      color: #dedede;
      font-size: 14px;
    }
  }

  button {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin-top: auto;
    border-radius: 4px;
    border: 1px solid #612f74;
    background: transparent;
    color: #612f74;

    width: 250px;
    height: 40px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, 'rgb(138, 5, 170)')};
    }
  }
`;

export const TranslateNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  width: 250px;
  height: auto;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #565656;
    margin-bottom: 10px;
  }

  strong {
    height: 60px;
    margin-bottom: 10px;
  }
`;
