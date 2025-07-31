import type { Control } from 'react-hook-form';

export interface PluginConfig {
  name: string;
  version: string;
  description?: string;
  author?: string;
}

export interface PluginContext {
  config: PluginConfig;
  theme: Theme;
  onAction: (action: string, payload?: any) => void;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  theme?: Theme;
}

export interface BaseSelectOption {
  value: string;
  label: string;
}

export interface BaseInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  type?: 'text' | 'number' | 'password' | 'select' | 'checkbox';
  name: string;
  control: Control<any>;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  options?: BaseSelectOption[];
  value?: string; // for checkbox group
  maxlength?: number;
  required?: boolean;
  className?: string;
  clearable?: boolean;
  id?: string;
  disabled?: boolean;
  error?: string;
}
