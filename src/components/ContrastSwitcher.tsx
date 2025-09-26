import DesktopIcon from '../media/icons/system.svg?react';
import LightModeIcon from '../media/icons/light-mode.svg?react';
import DarkModeIcon from '../media/icons/dark-mode.svg?react';
import { css } from '@pigment-css/react';
import type { CSSProperties } from 'react';
import { useContrast } from '../context/contrast';
import { Contrast } from '../context/contrast';

export const ContrastSwitcher = () => {
  const { contrast, setContrast } = useContrast();

  const contrastSwitcherStyles = css`
    button {
      background-color: transparent;
      border-radius: 4px;
      padding: 0;
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      width:2rem;
      height:2rem;
      color: grey;
    }
    background-color: var(--colors-newOrleans);
    height: 2rem;
    border-radius: 1rem;
  `;

  let borderColor;
  switch(contrast) {
    case Contrast.system:
      borderColor = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'blue' : 'red';
      break;
    case Contrast.light:
      borderColor = 'red';
      break;
    case Contrast.dark:
      borderColor = 'blue';
      break;
    default:
      break;
  }
  const dynamicStyles = {
    '--border-color': borderColor
  } as CSSProperties;

  return (
    <div className={contrastSwitcherStyles} style={dynamicStyles}>
      <button onClick={() => setContrast(Contrast.system)}>
        <DesktopIcon />
      </button>
      <button onClick={() => setContrast(Contrast.light)}>
        <LightModeIcon />
      </button>
      <button onClick={() => setContrast(Contrast.dark)}>
        <DarkModeIcon />
      </button>
    </div>
  )
}