import { all } from 'redux-saga/effects';

import translated from './translated/sagas';

export default function* rootSaga() {
  return yield all([translated]);
}
