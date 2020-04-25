import styled, { css } from 'styled-components';

interface ContainerProps {
  check: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 0px 5px;
  padding: 15px;
  border-bottom: 1px solid #8a05be;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #111;
      border-radius: 2px;
      padding: 5px 10px;
      box-shadow: rgb(138, 5, 190) 0px 2px 4px;
      margin-right: 15px;
    }

    strong {
      font-size: 14px;
      font-weight: bold;
      color: #767676;
      ${(props) =>
        props.check &&
        css`
          color: #8a05be;
        `}
    }
  }
`;
