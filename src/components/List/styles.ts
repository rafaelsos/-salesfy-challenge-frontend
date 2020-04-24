import styled, { css } from 'styled-components';

/*
interface ContainerProps {
  isCheck: boolean;
}
*/
export const Container = styled.div`
  margin: 0px 5px;
  padding: 10px 5px;
  background: #f0f0f0;
  border-radius: 4px;

  & + div {
    margin: 5px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span {
      font-size: 12px;
      font-weight: bold;
      color: #565656;
      margin-bottom: 5px;
    }

    strong {
      color: #612f74;
      /*
      ${(props) =>
        props.isCheck &&
        css`
          color: #ff9000;
        `}
        */
    }
  }
`;
