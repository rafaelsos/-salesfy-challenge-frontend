import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px;

  img {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-left: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  @media all and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  border-radius: 4px;
  padding: 20px;
  width: 400px;
  height: 300px;

  background: #fff;

  input {
    font-size: 22px;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    background: #f0f0f0;
    text-align: center;
    width: 250px;
    height: 40px;

    margin-bottom: 10px;
    &::placeholder {
      color: #dedede;
      font-size: 14px;
    }
  }

  button {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #612f74;
    background: transparent;
    color: #612f74;
    width: 250px;
    height: 40px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.02, '#fff')};
    }
  }
`;

export const CardTranslateNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 300px;

  height: auto;

  span {
    font-size: 12px;
    font-weight: bold;
    color: #565656;
    margin-bottom: 5px;
  }

  strong {
    background: #f0f0f0;
    color: #612f74;
    padding: 20px;
    border-radius: 4px;
    line-height: 20px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 20px;
  width: 500px;
  height: 400px;

  background: #fff;

  > span {
    font-size: 14px;
    font-weight: bold;
    color: #565656;
    margin-bottom: 10px;
  }

  > p {
    font-size: 16px;
    font-weight: bold;
    color: #565656;
  }

  ul {
    list-style: none;
    overflow: auto;
    width: 400px;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #612f74;
    }
  }

  @media all and (max-width: 720px) {
    margin-left: 0;
    margin-top: 10px;
    width: 400px;
    padding: 20px;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  p {
    font-size: 20px;
    color: #dedede;
    font-weight: bold;
  }
`;
