import { CSSProperties } from "react";
import { Contrast } from "../../context/contrast";

export default (contrast: Contrast) => {
  return {
    '--colors-background': contrast === Contrast.light ? 'var(--colors-bananaMania)' : 'var(--colors-jaguar)',
    '--colors-primary': contrast === Contrast.light ? 'var(--colors-newOrleans)' : '#1c202a',
    '--colors-text': contrast === Contrast.light ? 'var(--colors-mineshaft)' : '#ffffff',
    'background-color': 'var(--colors-background)',
    
  } as CSSProperties;
}