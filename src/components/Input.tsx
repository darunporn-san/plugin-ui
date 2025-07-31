import * as React from 'react';
import type { BaseInputProps } from '../types';
import { Input as InputShadcn } from '@/components/ui/input';

export const Input: React.FC<BaseInputProps> = (props) => {
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <InputShadcn {...props} />
    </div>
  );
};
