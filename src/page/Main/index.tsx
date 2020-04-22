import React, { useState } from 'react';
import api from '../../service/api';

import logoNubank from '../../assets/Nubank_Logo.png';

import { Container, Header, Card, TranslateNumber, CardList } from './styles';

interface Numbers {
  number: string;
  description: string;
}

export default function Main() {
  const [numberInput, setNumberInput] = useState('');
  const [numberTranslate, setNumberTranslate] = useState('');
  const [listNumbers, setListNumbers] = useState<Numbers[]>([]);

  async function handleTranslateNumber(number: string) {
    if (!number) {
      alert('Digite o número que deseja traduzir');
      return;
    }

    try {
      const response = await api.get(`translate/${number}`);

      setNumberTranslate(response.data);

      setListNumbers([
        ...listNumbers,
        {
          number,
          description: response.data,
        },
      ]);
    } catch (error) {
      alert(error.response.data);
      setNumberInput('');
    }
  }

  return (
    <Container>
      <Header>
        <img src={logoNubank} alt="nubankLogo" />
        <h1>Salesfy</h1>
      </Header>
      <Card>
        <input
          type="text"
          placeholder="Digite o número aqui..."
          onChange={(e) => setNumberInput(e.target.value)}
          value={numberInput}
        />
        {numberTranslate ? (
          <TranslateNumber>
            <span>
              Numero
              {numberInput}
            </span>
            <strong>{numberTranslate}</strong>
          </TranslateNumber>
        ) : (
            ''
          )}

        <button
          type="button"
          onClick={() => handleTranslateNumber(numberInput)}
        >
          Traduzir
        </button>
      </Card>
      {listNumbers.length ? (
        <CardList>
          <span>Total de 6 numeros traudizdos</span>
          <ul>
            {listNumbers.map((item) => (
              <li key={item.number}>
                <p>
                  Numero
                  {item.number}
                </p>
                <strong>{item.description}</strong>
              </li>
            ))}
          </ul>
        </CardList>
      ) : (
          ''
        )}
    </Container>
  );
}
