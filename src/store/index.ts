import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TranslatedState } from './modules/translated/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface ApplicationState {
  translated: TranslatedState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
