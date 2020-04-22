import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../service/api';

import { TranslateNumber } from '../../store/modules/translated/types';
import { translateRequest } from '../../store/modules/translated/actions';

import logoNubank from '../../assets/Nubank_Logo.png';

import {
  Container,
  Header,
  Card,
  CardTranslateNumber,
  CardList,
} from './styles';

export default function Main() {
  const [numberInput, setNumberInput] = useState('');
  const [numberTranslate, setNumberTranslate] = useState('');
  const [listNumbers, setListNumbers] = useState<TranslateNumber[]>([]);

  const dispatch = useDispatch();

  async function handleTranslateNumber(number: string) {
    dispatch(translateRequest(number));
    /*
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
    */
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

        <CardTranslateNumber>
          <span>Numero Traduzido</span>
          <strong>{numberTranslate}</strong>
        </CardTranslateNumber>

        <button
          type="button"
          onClick={() => handleTranslateNumber(numberInput)}
        >
          Traduzir
        </button>
      </Card>
      <CardList>
        {listNumbers.length ? (
          <>
            <span>
              Total de
              {` ${listNumbers.length} `}
              numeros traudizdos
            </span>
            <ul>
              {listNumbers.map((item) => (
                <li key={item.number}>
                  <p>
                    Numero
                    {` ${item.number}`}
                  </p>
                  <strong>{item.description}</strong>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <span>Nenhum item traduzido até o momento!</span>
        )}
      </CardList>
    </Container>
  );
}
