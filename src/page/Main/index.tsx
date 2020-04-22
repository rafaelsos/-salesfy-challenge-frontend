import React from 'react';

import logoNubank from '../../assets/Nubank_Logo.png';

import { Container, Header, Card } from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <img src={logoNubank} alt="nubankLogo" />
        <h1>Salesfy</h1>
      </Header>
      <Card>
        <input type="text" placeholder="Digite o número aqui..." />
        <span>Número Traduzido 9999999</span>
        <strong>
          nine hundred ninety-nine million nine hundred ninety-nine thousand
          nine hundred ninety-nine
        </strong>
        <button type="button">Traduzir</button>
      </Card>
    </Container>
  );
}
