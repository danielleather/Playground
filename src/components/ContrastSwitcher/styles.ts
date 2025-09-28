import { css } from "@pigment-css/react";
import { Contrast } from "../../context/contrast";
import type { CSSProperties } from 'react'

export const contrastSwitcherStyles = css`
  button {
    background-color: transparent;
    border-radius: 0.25rem;
    padding: 0;
    border-radius: 1rem;
    width:1.5rem;
    height:1.5rem;
    color: var(--colors-text);
    border: none;
    &.selected {
      background-color: var(--button-background);
      border: 1px solid var(--border-color);
    }
    position: relative;
    svg {
      position: absolute;
      top: -1px;
      left: -1px;
    }
  }
  background-color: var(--colors-primary);
  height: 1.875rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3px;
`;

export const dynamicStyles = (contrast: Contrast) => {
  return {
    '--border-color': contrast === Contrast.light ? '#eabf62' : '#4a5363',
    '--button-background': contrast === Contrast.light ? 'var(--colors-background)' : '#364152',
  } as CSSProperties;
}