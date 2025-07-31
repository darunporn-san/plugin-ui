import * as React from 'react';
import type { BaseInputProps } from '../types';
import { Input as InputShadcn} from '@/components/ui/input';

export const Input: React.FC<BaseInputProps> = ({
  label,
  tooltip,
  error,
  required,
  id,
  placeholder,
  disabled,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <InputShadcn type="email" placeholder="Email" />
    </div>
  );
};
