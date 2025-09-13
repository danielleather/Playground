import type { Theme } from './helpers/types';

declare module '@pigment-css/react' {
  interface ThemeArgs {
    theme: Theme;
  }
}

export interface ThemeArgs {
  theme: Theme;
}

export type { Theme };
