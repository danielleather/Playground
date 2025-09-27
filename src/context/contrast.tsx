import { createContext, useContext, useState } from "react";

export enum Contrast {
  light = 'light',
  dark = 'dark',
}

export const getSystemContrast = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Contrast.dark : Contrast.light;

export const ContrastContext = createContext<{ contrast: Contrast; setContrast: React.Dispatch<React.SetStateAction<Contrast>>; } | undefined>(undefined);

function ContrastProvider({ children }: { children: React.ReactNode }) {
  const [contrast, setContrast] = useState<Contrast>(getSystemContrast());

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
