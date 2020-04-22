import { Reducer } from 'redux';
import { TranslatedState, TranslatedTypes } from './types';

const INITIAL_STATE: TranslatedState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TranslatedState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TranslatedTypes.TRANSLATE_REQUEST:
      return { ...state, loading: true };
    case TranslatedTypes.TRANSLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case TranslatedTypes.TRANSLATE_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
