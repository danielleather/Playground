import DesktopIcon from '../media/icons/desktop.svg?react';
import LightModeIcon from '../media/icons/light-mode.svg?react';
import DarkModeIcon from '../media/icons/dark-mode.svg?react';
import { css } from '@pigment-css/react';

export const ContrastSwitcher = () => {
  const contrastSwitcherStyles = css`
    button {
      background-color: transparent;
      border-radius: 4px;
      padding: 0;
      border: 1px solid var(--colors-newOrleans);
      border-radius: 1rem;
      width:2rem;
      height:2rem;
      color: grey;
    }
    background-color: var(--colors-newOrleans);
    height: 2rem;
    border-radius: 1rem;
  `;

  return (
    <div className={contrastSwitcherStyles}>
      <button>
        <DesktopIcon />
      </button>
      <button>
        <LightModeIcon />
      </button>
      <button>
        <DarkModeIcon />
      </button>
    </div>
  )
}