import { Reducer } from 'redux';
import produce from 'immer';
import { TranslatedState, TranslatedTypes } from './types';

const INITIAL_STATE: TranslatedState = {
  data: [],
  error: false,
  numberTranslate: '',
};

const reducer: Reducer<TranslatedState> = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TranslatedTypes.TRANSLATE_SUCCESS: {
        draft.numberTranslate = action.payload.numero;
        draft.error = false;
        draft.data.push(action.payload.data);
        break;
      }
      default:
    }
  });

export default reducer;
