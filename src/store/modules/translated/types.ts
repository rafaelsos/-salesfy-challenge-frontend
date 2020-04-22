/**
 * Action types
 */
export enum TranslatedTypes {
  TRANSLATE_REQUEST = '@translate/TRANSLATE_REQUEST',
  TRANSLATE_SUCCESS = '@translate/TRANSLATE_SUCCESS',
  TRANSLATE_FAILURE = '@translate/TRANSLATE_FAILURE',
}

/**
 * Data types
 */
export interface TranslateNumber {
  number: string;
  description: string;
}

/**
 * State type
 */
export interface TranslatedState {
  readonly data: TranslateNumber[];
  readonly loading: boolean;
  readonly error: boolean;
}
