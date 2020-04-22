import { createStore, Store } from 'redux';
import { TranslatedState } from './modules/translated/types';

import rootReducer from './modules/rootReducer';

export interface ApplicationState {
  translated: TranslatedState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
