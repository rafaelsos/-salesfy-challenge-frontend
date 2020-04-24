import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { TranslatedTypes } from './types';
import { ApplicationState } from '../..';

import api from '../../../service/api';

import {
  translateRequest,
  translateSuccess,
  translateCheckUpdate,
  translateFailure,
} from './actions';

function* translateToNumber({ payload }: ReturnType<typeof translateRequest>) {
  try {
    const response = yield call(api.get, `/translate/${payload.number}`);

    const data = {
      number: payload.number,
      description: response.data,
      check: false,
    };

    const amount = payload.amount + 1;
    const amountTranslate = yield call(api.get, `/translate/${amount}`);

    yield put(translateSuccess(data, response.data, amountTranslate.data));
  } catch (error) {
    if (!payload) {
      toast.info('Digite o número que deseja traduzir');
    } else {
      toast.info(error.response.data);
    }

    yield put(translateFailure());
  }
}

function* translatedCheckNumber() {
  const amountText: string = yield select(
    (state: ApplicationState) => state.translated.totalNumbersTranslate,
  );

  const number: string = yield select((state: ApplicationState) =>
    state.translated.data.find((item) => item.description === amountText),
  );

  const dataNumber = number || '';

  yield put(translateCheckUpdate(dataNumber));
}

export default all([
  takeLatest(TranslatedTypes.TRANSLATE_REQUEST, translateToNumber),
  takeLatest(TranslatedTypes.TRANSLATE_CHECK_REQUEST, translatedCheckNumber),
]);
