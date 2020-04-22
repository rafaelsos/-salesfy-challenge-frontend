import { action } from 'typesafe-actions';
import { TranslatedTypes, TranslateNumber } from './types';

export const translateRequest = () => action(TranslatedTypes.TRANSLATE_REQUEST);

export const translateSuccess = (data: TranslateNumber[]) =>
  action(TranslatedTypes.TRANSLATE_SUCCESS, data);

export const translateFailure = () => action(TranslatedTypes.TRANSLATE_FAILURE);
