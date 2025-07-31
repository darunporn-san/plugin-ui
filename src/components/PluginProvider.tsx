import React from 'react';
import { PluginConfig } from '@/types';
import { PluginContextProvider } from '@/hooks/usePluginContext';
import { defaultTheme } from '@/utils/theme';

interface PluginProviderProps {
  config: PluginConfig;
  theme?: typeof defaultTheme;
  onAction?: (action: string, payload?: any) => void;
  children: React.ReactNode;
}

export const PluginProvider: React.FC<PluginProviderProps> = ({
  config,
  theme = defaultTheme,
  onAction = () => {},
  children,
}) => {
  const contextValue = {
    config,
    theme,
    onAction,
  };

  return (
    <PluginContextProvider.Provider value={contextValue}>
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: theme.colors.text,
          backgroundColor: theme.colors.background,
        }}
      >
        {children}
      </div>
    </PluginContextProvider.Provider>
  );
};
