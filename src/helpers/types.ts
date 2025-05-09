import type languages from '../helpers/localisation/languages';

export type Language = keyof typeof languages;

export type Theme = {
  colors: {
    bananaMania: string;
    newOrleans: string;
  }
};