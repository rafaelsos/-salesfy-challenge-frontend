import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLineWeight } from 'react-icons/md';

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
  Content,
  EmptyList,
} from './styles';

export default function Main() {
  const [numberInput, setNumberInput] = useState('');
  const [numberTranslate, setNumberTranslate] = useState('');
  const [listNumbers, setListNumbers] = useState<TranslateNumber[]>([]);

  const dispatch = useDispatch();

  const numTranslate = useSelector(
    (state: ApplicationState) => state.translated.numberTranslate,
  );

  const list = useSelector((state: ApplicationState) => state.translated.data);

  useEffect(() => {
    setNumberTranslate(numTranslate);
    setListNumbers(list);
  }, [numTranslate, list]);

  async function handleTranslateNumber(number: string) {
    dispatch(translateRequest(number));
  }

  return (
    <Container>
      <Header>
        <img src={logoNubank} alt="nubankLogo" />
        <h1>Salesfy</h1>
      </Header>
      <Content>
        <Card>
          <input
            type="text"
            placeholder="Digite o número aqui..."
            onChange={(e) => setNumberInput(e.target.value)}
            value={numberInput}
          />
          <button
            type="button"
            onClick={() => handleTranslateNumber(numberInput)}
          >
            Traduzir
          </button>

          <CardTranslateNumber>
            <span>Número Traduzido</span>
            <strong>{numberTranslate}</strong>
          </CardTranslateNumber>
        </Card>

        <CardList>
          {listNumbers.length ? (
            <>
              <span>
                Total de
                {` ${listNumbers.length} `}
                números traudizdos
              </span>
              <ul>
                {listNumbers?.map((item) => (
                  <li key={String(item.number)}>
                    <span>
                      Número
                      {` ${item.number}`}
                    </span>
                    <strong>{item.description}</strong>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <EmptyList>
              <p>Nenhum número traduzido até o momento!</p>
              <MdLineWeight size={150} color="#f0f0f0" />
            </EmptyList>
          )}
        </CardList>
      </Content>
    </Container>
  );
}
