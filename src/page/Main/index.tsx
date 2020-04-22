import React from 'react';

import logoNubank from '../../assets/Nubank_Logo.png';

import { Container, Header } from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <img src={logoNubank} alt="nubankLogo" />
        <h1>Salesfy</h1>
      </Header>
    </Container>
  );
}
