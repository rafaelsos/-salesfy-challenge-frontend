import {
  createStore,
  Store,
  applyMiddleware,
  compose,
  StoreEnhancer,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { TranslatedState } from './modules/translated/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer: StoreEnhancer<{}, TranslatedState> =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

export interface ApplicationState {
  translated: TranslatedState;
}

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
