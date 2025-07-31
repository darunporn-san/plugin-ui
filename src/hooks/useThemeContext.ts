import { createContext, useContext } from 'react';
import { Theme } from '@/types';
import { defaultTheme } from '@/utils/theme';

export const ThemeContextProvider = createContext<Theme>(defaultTheme);

export const useThemeContext = (): Theme => {
  const theme = useContext(ThemeContextProvider);
  return theme || defaultTheme;
};
