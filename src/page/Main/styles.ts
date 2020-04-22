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
      background: ${darken(0.02, '#fff')};
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
export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
  background: #fff;
  width: 400px;
  height: 230px;
  padding: 20px;

  > span {
    font-size: 14px;
    font-weight: bold;
    color: #565656;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    height: 180px;
    overflow: auto;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10px;
      margin: 0px 5px;
      padding: 0.5em 0;
      border-bottom: 1px solid #612f74;

      & + li {
        margin: 5px;
      }

      p {
        font-size: 12px;
        font-weight: bold;
        color: #565656;
      }

      strong {
        color: #612f74;
      }
    }

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
`;
