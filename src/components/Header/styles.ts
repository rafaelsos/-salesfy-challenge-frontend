import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;

  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 20px;
    color: #8a05be;
    width: 45px;
    height: 35px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 20px;

    li {
      padding: 19px 12px;

      a {
        text-decoration: none;
        font-size: 18px;
        color: rgb(118, 118, 118);
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;

  span {
    font-size: 18px;
    color: #8a05be;
    padding-right: 30px;
    border-right: 1px solid #8a05be;
  }

  svg {
    margin-left: 30px;
  }
`;
