import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  margin-top: 100px;

  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;

  @media all and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerTranslate = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  > svg {
    margin-bottom: 10px;
  }
`;

export const Translate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  input {
    font-size: 22px;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    background: #dedede;
    text-align: center;
    width: 200px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;

    &::placeholder {
      color: #c2c2c2;
      font-size: 14px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 1px solid #8a05be;
    background: #fff;
    color: #8a05be;
    width: 200px;
    height: 40px;
    margin-left: 10px;

    transition: background 0.2s;
    &:hover {
      background: ${darken(0.01, '#fff')};
    }

    span {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
      color: #8a05be;
    }
  }
`;

export const CardTranslate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #8a05be;
  box-shadow: rgb(138, 5, 190) 0px 1px 2pxpx;
  width: 410px;
  min-height: 100px;

  strong {
    text-align: center;
    font-size: 20px;
    padding: 10px;
    color: #767676;
    border-radius: 4px;
    line-height: 25px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  height: 320px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 2px;

  > span {
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    overflow: auto;
    width: 630px;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #fff;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #8a05be;
    }
  }

  @media all and (max-width: 800px) {
    ul {
      width: 370px;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
  /*
  @media all and (max-width: 800px) {
    img {
      margin-top: 20px;
      max-width: 350px;
      max-height: 350px;
    }
  }
  */
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 630px;
  margin-top: 80px;
  p {
    font-size: 20px;
    color: #767676;
    font-weight: bold;
  }

  @media all and (max-width: 800px) {
    width: 370px;
  }
`;
