import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLineWeight } from 'react-icons/md';

import { ApplicationState } from '../../store';
import { TranslateNumber } from '../../store/modules/translated/types';
import { translateRequest } from '../../store/modules/translated/actions';
import List from '../../components/List';

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

interface TranslateProps {
  number: string;
  amount: number;
}

export default function Main() {
  const [numberInput, setNumberInput] = useState('');
  const [numberTranslate, setNumberTranslate] = useState('');
  const [listNumbers, setListNumbers] = useState<TranslateNumber[]>([]);

  const dispatch = useDispatch();

  const numTranslate = useSelector(
    (state: ApplicationState) => state.translated.numberTranslate,
  );
  const list = useSelector((state: ApplicationState) => state.translated.data);
  const total = useSelector(
    (state: ApplicationState) => state.translated.totalNumbersTranslate,
  );

  useEffect(() => {
    setNumberTranslate(numTranslate);
    setListNumbers(list);
  }, [numTranslate, list]);

  const handleTranslateNumber = useCallback(
    (number: string) => {
      dispatch(translateRequest(number, listNumbers.length));
    },
    [dispatch, listNumbers.length],
  );

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
            placeholder="Type the number here..."
            onChange={(e) => setNumberInput(e.target.value)}
            value={numberInput}
          />
          <button
            type="button"
            onClick={() => handleTranslateNumber(numberInput)}
          >
            Translate
          </button>

          <CardTranslateNumber>
            <span>Translated number</span>
            <strong>{numberTranslate}</strong>
          </CardTranslateNumber>
        </Card>

        <CardList>
          {listNumbers.length ? (
            <>
              <span>
                There’s
                {` ${total} `}
                numbers translated
              </span>
              <ul>
                {listNumbers?.map((item) => (
                  <List key={String(listNumbers.indexOf(item))} data={item} />
                ))}
              </ul>
            </>
          ) : (
            <EmptyList>
              <p>There are still no translated numbers!</p>
              <MdLineWeight size={150} color="#f0f0f0" />
            </EmptyList>
          )}
        </CardList>
      </Content>
    </Container>
  );
}
