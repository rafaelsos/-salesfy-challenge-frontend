import React, { useState, useCallback } from 'react';

import { FiLogOut, FiMenu } from 'react-icons/fi';
import logoNubank from '../../assets/nubank-logo.png';

import { Container, Menu, Profile } from './styles';

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <Container>
      <Menu>
        <img src={logoNubank} alt="logoNubank" />
        <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
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
      <button type="button" onClick={() => handleToggle()}>
        <FiMenu size={30} color="#8a05be" />
      </button>
    </Container>
  );
};

export default Header;
