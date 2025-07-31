import React from 'react';
import { InputProps } from '@/types';
import { usePluginContext } from '@/hooks/usePluginContext';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}) => {
  const { theme } = usePluginContext();

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    border: `1px solid ${error ? theme.colors.error : theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    fontSize: '1rem',
    backgroundColor: disabled ? theme.colors.surface : theme.colors.background,
    color: theme.colors.text,
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: theme.spacing.xs,
    fontSize: '0.875rem',
    fontWeight: '500',
    color: theme.colors.text,
  };

  const errorStyles: React.CSSProperties = {
    marginTop: theme.spacing.xs,
    fontSize: '0.875rem',
    color: theme.colors.error,
  };

  const containerStyles: React.CSSProperties = {
    marginBottom: theme.spacing.md,
  };

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <input
        type="text"
        style={inputStyles}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        onFocus={(e) => {
          e.target.style.borderColor = theme.colors.primary;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? theme.colors.error : theme.colors.border;
        }}
      />
      {error && <div style={errorStyles}>{error}</div>}
    </div>
  );
};
