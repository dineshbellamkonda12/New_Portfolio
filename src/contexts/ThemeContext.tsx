import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  theme: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    return saved && ['light', 'dark'].includes(saved) ? saved : 'dark';
  });

  const applyTheme = useCallback((theme: ThemeMode) => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem('theme-mode', newMode);
    applyTheme(newMode);
  }, [applyTheme]);

  const toggleMode = useCallback(() => {
    const next: ThemeMode = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
  }, [mode, setMode]);

  useEffect(() => {
    applyTheme(mode);
  }, [mode, applyTheme]);

  return (
    <ThemeContext.Provider value={{ mode, theme: mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
