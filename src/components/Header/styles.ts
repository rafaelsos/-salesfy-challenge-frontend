import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;

  button {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    height: auto;
    min-height: 70px;
    position: relative;

    button {
      border: none;
      display: inline-block;
      background: transparent;
      position: absolute;
      top: 20px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      transition-duration: 0.9s;

      &.is-expanded {
        overflow: hidden;
        max-height: 500px;
        transition-duration: 0.9s;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
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
        transition: background 0.2s;
        &:hover {
          color: ${lighten(0.09, '#8a05be')};
        }
      }
    }

    li:nth-child(1) {
      a {
        color: #8a05be;
        transition: background 0.2s;
        &:hover {
          color: ${lighten(0.09, '#8a05be')};
        }
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

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
