import { Reducer } from 'redux';
import produce from 'immer';
import { TranslatedState, TranslatedTypes } from './types';

const INITIAL_STATE: TranslatedState = {
  data: [],
  error: false,
  numberTranslate: '',
  totalNumbersTranslate: '',
};

const reducer: Reducer<TranslatedState> = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TranslatedTypes.TRANSLATE_SUCCESS: {
        draft.numberTranslate = action.payload.numero;
        draft.totalNumbersTranslate = action.payload.amountTranslate;
        draft.error = false;
        draft.data.push(action.payload.data);
        break;
      }
      case TranslatedTypes.TRANSLATE_CHECK_UPDATE: {
        const { description: amount } = action.payload.amount;
        draft.data.forEach((item) => {
          item.check = item.description === amount;
        });
        break;
      }
      case TranslatedTypes.TRANSLATE_FAILURE: {
        draft.error = true;
        break;
      }
      default:
    }
  });

export default reducer;
