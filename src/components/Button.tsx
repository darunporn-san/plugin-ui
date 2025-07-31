import React from 'react';
import { ButtonProps } from '@/types';
import { usePluginContext } from '@/hooks/usePluginContext';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
  style,
}) => {
  const { theme } = usePluginContext();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          color: '#ffffff',
          border: `1px solid ${theme.colors.primary}`,
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary,
          color: '#ffffff',
          border: `1px solid ${theme.colors.secondary}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.primary,
          border: `1px solid ${theme.colors.primary}`,
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          fontSize: '0.875rem',
        };
      case 'md':
        return {
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          fontSize: '1rem',
        };
      case 'lg':
        return {
          padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          fontSize: '1.125rem',
        };
      default:
        return {};
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: theme.borderRadius.md,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'all 0.2s ease-in-out',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style, // Apply custom style prop
  };

  return (
    <button
      style={baseStyles}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      {loading && <span>⏳</span>}
      {children}
    </button>
  );
};
