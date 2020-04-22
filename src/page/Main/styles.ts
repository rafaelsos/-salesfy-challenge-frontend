import styled from 'styled-components';

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
