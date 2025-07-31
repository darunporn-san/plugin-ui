import { createContext, useContext } from 'react';
import { PluginContext } from '@/types';

export const PluginContextProvider = createContext<PluginContext | null>(null);

export const usePluginContext = (): PluginContext => {
  const context = useContext(PluginContextProvider);
  if (!context) {
    throw new Error('usePluginContext must be used within a PluginProvider');
  }
  return context;
};
