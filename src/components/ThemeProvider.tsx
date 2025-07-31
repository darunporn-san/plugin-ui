import React from 'react';
import { Theme } from '@/types';
import { ThemeContextProvider } from '@/hooks/useThemeContext';
import { defaultTheme } from '@/utils/theme';

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeContextProvider.Provider value={theme}>
      {children}
    </ThemeContextProvider.Provider>
  );
};
