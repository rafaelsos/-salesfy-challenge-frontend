import { action } from 'typesafe-actions';
import { TranslatedTypes, TranslateNumber } from './types';

export const translateRequest = (number: string) =>
  action(TranslatedTypes.TRANSLATE_REQUEST, number);

export const translateSuccess = (data: TranslateNumber, numero: string) =>
  action(TranslatedTypes.TRANSLATE_SUCCESS, { data, numero });

export const translateFailure = () => action(TranslatedTypes.TRANSLATE_FAILURE);
