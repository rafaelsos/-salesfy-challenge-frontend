import { put, all, takeLatest } from 'redux-saga/effects';

import { TranslatedTypes } from './types';

import api from '../../../service/api';

import {
  translateRequest,
  translateSuccess,
  translateFailure,
} from './actions';

function* translateToNumber({ payload }: ReturnType<typeof translateRequest>) {
  try {
    const response = yield api.get(`translate/${payload}`);

    const data = [
      {
        number: payload,
        description: response.data,
      },
    ];

    yield put(translateSuccess(data, response.data));
  } catch (error) {
    alert('Erro ao adicionar produto no carrinho de compras!');

    yield put(translateFailure());
  }
}

export default all([
  takeLatest(TranslatedTypes.TRANSLATE_REQUEST, translateToNumber),
]);

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
