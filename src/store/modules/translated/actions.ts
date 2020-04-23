import { action } from 'typesafe-actions';
import { TranslatedTypes, TranslateNumber } from './types';

export const translateRequest = (number: string, amount: number) =>
  action(TranslatedTypes.TRANSLATE_REQUEST, { number, amount });

export const translateSuccess = (
  data: TranslateNumber,
  numero: string,
  amountTranslate: string,
) =>
  action(TranslatedTypes.TRANSLATE_SUCCESS, { data, numero, amountTranslate });

export const translateFailure = () => action(TranslatedTypes.TRANSLATE_FAILURE);
