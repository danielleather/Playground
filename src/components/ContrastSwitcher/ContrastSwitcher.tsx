import DesktopIcon from '../../media/icons/system.svg?react';
import LightModeIcon from '../../media/icons/light-mode.svg?react';
import DarkModeIcon from '../../media/icons/dark-mode.svg?react';
import { useContrast } from '../../context/contrast';
import { Contrast } from '../../context/contrast';
import { contrastSwitcherStyles, dynamicStyles } from './styles';
import { getSystemContrast } from '../../context/contrast';
import { useState } from 'react';

export const ContrastSwitcher = () => {
  const { contrast, setContrast } = useContrast();
  const [selected, setSelected] = useState<Contrast | 'system'>('system');

  return (
    <div className={contrastSwitcherStyles} style={dynamicStyles(contrast)}> 
      <button 
        onClick={() => {
          setContrast(getSystemContrast());
          setSelected('system');
        }} 
        aria-label="System"
        className={selected === 'system' ? 'selected' : ''}
      >
        <DesktopIcon />
      </button>
      <button 
        onClick={() => {
          setContrast(Contrast.light);
          setSelected(Contrast.light);
        }} 
        aria-label="Light"
        className={selected === Contrast.light ? 'selected' : ''}
      >
        <LightModeIcon />
      </button>
      <button 
        onClick={() => {
          setContrast(Contrast.dark);
          setSelected(Contrast.dark);
        }} 
        aria-label="Dark"
        className={selected === Contrast.dark ? 'selected' : ''}
      >
        <DarkModeIcon />
      </button>
    </div>
  )
}