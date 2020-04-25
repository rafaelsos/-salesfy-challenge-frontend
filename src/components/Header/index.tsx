import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import logoNubank from '../../assets/nubank-logo.png';

import { Container, Menu, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <img src={logoNubank} alt="logoNubank" />
        <ul>
          <li>
            <a href="/">Translate</a>
          </li>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Conta Digital</a>
          </li>
          <li>
            <a href="/">Cartão de Crédito</a>
          </li>
          <li>
            <a href="/">Empréstimos</a>
          </li>
        </ul>
      </Menu>
      <Profile>
        <span>Salesfy</span>
        <FiLogOut size={30} color=" #8a05be" />
      </Profile>
    </Container>
  );
};

export default Header;
