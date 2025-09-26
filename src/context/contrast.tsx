import { createContext, useContext, useState } from "react";

export enum Contrast {
  light = 'light',
  dark = 'dark',
  system = 'system'
}

const defaultContrast: Contrast = Contrast.system;

export const ContrastContext = createContext<{ contrast: Contrast; setContrast: React.Dispatch<React.SetStateAction<Contrast>>; } | undefined>(undefined);

function ContrastProvider({ children }: { children: React.ReactNode }) {
  const [contrast, setContrast] = useState<Contrast>(defaultContrast);

  return <ContrastContext.Provider value={{ contrast, setContrast }}>{children}</ContrastContext.Provider>;
}

function useContrast() {
  const contrastContext = useContext(ContrastContext);
  if (!contrastContext) {
    throw new Error('useContrast must be used within a ContrastProvider');
  }
  return contrastContext;
}

export { ContrastProvider, useContrast };
  