import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { TranslatedTypes } from './types';

import api from '../../../service/api';

import {
  translateRequest,
  translateSuccess,
  translateFailure,
} from './actions';

function* translateToNumber({ payload }: ReturnType<typeof translateRequest>) {
  try {
    const response = yield call(api.get, `/translate/${payload}`);

    const data = {
      number: payload,
      description: response.data,
    };

    yield put(translateSuccess(data, response.data));
  } catch (error) {
    if (!payload) {
      toast.info('Digite o número que deseja traduzir');
    } else {
      toast.info(error.response.data);
    }

    yield put(translateFailure());
  }
}

export default all([
  takeLatest(TranslatedTypes.TRANSLATE_REQUEST, translateToNumber),
]);
