import React from 'react';

import logoNubank from '../../assets/Nubank_Logo.png';

import { Container, Header, Card, TranslateNumber } from './styles';

export default function Main() {
  return (
    <Container>
      <Header>
        <img src={logoNubank} alt="nubankLogo" />
        <h1>Salesfy</h1>
      </Header>
      <Card>
        <input type="text" placeholder="Digite o número aqui..." />
        <TranslateNumber>
          <span>Numero 9999999999</span>
          <strong>
            nine hundred ninety-nine billion nine hundred ninety-nine million
            nine hundred ninety-nine thousand nine hundred ninety-nine
          </strong>
        </TranslateNumber>
        <button type="button">Traduzir</button>
      </Card>
    </Container>
  );
}
