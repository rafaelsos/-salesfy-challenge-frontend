import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdGTranslate, MdSync, MdLineWeight } from 'react-icons/md';

import { ApplicationState } from '../../store';

import {
  translateRequest,
  translateCheckRequest,
} from '../../store/modules/translated/actions';

import List from '../../components/List';

import nuContaDevice from '../../assets/nuconta-inclined-device@3x.png';

import {
  Container,
  Content,
  ContainerTranslate,
  Translate,
  CardTranslate,
  CardList,
  Image,
  EmptyList,
} from './styles';

export default function Main() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputNumber, setInputNumber] = useState('');

  const dispatch = useDispatch();
  const translated = useSelector((state: ApplicationState) => state.translated);

  useEffect(() => {
    dispatch(translateCheckRequest());
    if (!translated.error) setInputNumber('');
  }, [translated, dispatch]);

  const handleTranslateNumber = useCallback(
    (number: string) => {
      dispatch(translateRequest(number));
      if (inputRef.current) inputRef.current.focus();
    },
    [dispatch],
  );

  return (
    <Container>
      <Content>
        <ContainerTranslate>
          <Translate>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type the number here..."
              onChange={(e) => setInputNumber(e.target.value)}
              value={inputNumber}
            />
            <button
              type="button"
              onClick={() => handleTranslateNumber(inputNumber)}
            >
              <MdGTranslate size={40} color="#8a05be" />
              <span>Translate</span>
            </button>
          </Translate>
          <MdSync size={30} color="#8a05be" />
          <CardTranslate>
            <strong>{translated.numberTranslate}</strong>
          </CardTranslate>
          <CardList>
            {translated.data.length ? (
              <>
                <span>
                  There’s
                  {` ${translated.totalNumbersTranslate} `}
                  numbers translated
                </span>
                <ul>
                  {translated.data?.map((item) => (
                    <List
                      key={String(translated.data.indexOf(item))}
                      data={item}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <EmptyList>
                <p>There are still no translated numbers!</p>
                <MdLineWeight size={150} color="#767676" />
              </EmptyList>
            )}
          </CardList>
        </ContainerTranslate>
        <Image>
          <img src={nuContaDevice} alt="nuContaDevice" />
        </Image>
      </Content>
    </Container>
  );
}
