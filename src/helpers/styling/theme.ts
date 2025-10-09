import { CSSProperties } from "react";
import { Contrast } from "../../context/contrast";

export default (contrast: Contrast) => {
  return {
    '--colors-background': contrast === Contrast.light ? 'var(--colors-bananaMania)' : 'var(--colors-jaguar)',
    '--colors-primary': contrast === Contrast.light ? 'var(--colors-newOrleans)' : 'color-mix(in oklab, #fff 10%, transparent)',
    '--colors-text': contrast === Contrast.light ? 'var(--colors-mineshaft)' : '#ffffff',
    'backgroundColor': 'var(--colors-background)',
    
  } as CSSProperties;
}