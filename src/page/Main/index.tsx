import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
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

  const numTraduzido = useSelector(
    (state: ApplicationState) => state.translated.numberTranslate,
  );

  // faz a tradução do numero e guarda no state
  async function handleTranslateNumber(number: string) {
    dispatch(translateRequest(number));

    setNumberTranslate(numTraduzido);
    setListNumbers([
      {
        number: '1',
        description: 'test',
      },
    ]);
  }

  /*
  // busca no state o number traduzido
  const numeroTraduzido = useSelector(
    (state: ApplicationState) => state.translated.numberTranslate,
  );
  setNumberTranslate(numeroTraduzido);

  const list = useSelector((state: ApplicationState) =>
    state.translated.data.map((item) => {
      return item;
    }, {}),
  );
  setListNumbers(list);
  */

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
