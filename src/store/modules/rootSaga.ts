import { all } from 'redux-saga/effects';

import translate from './translated/sagas';

export default function* rootSaga() {
  return yield all([translate]);
}
