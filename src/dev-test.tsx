import React, { useState } from 'react';
import { PluginProvider, Button, BasicInput } from './components';
import { useForm } from "react-hook-form";
interface FormData {
  text: string;
  theme: string;
  dateRange: string;
  allChannels: boolean;
  channels: string[];
  category: string;
  excelFile?: FileList;
}

// ไฟล์สำหรับทดสอบ development โดยไม่ต้อง build
const DevTest: React.FC = () => {
  const { handleSubmit, control, setValue, watch, register, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      text: "",
      theme: "",
      dateRange: undefined,
      allChannels: false,
      channels: [],
      category: "",
      excelFile: undefined,
    },
  });

  return (
    <BasicInput
      name="text"
      control={control}
      className="w-full"
      required
      label="Text Input"
      tooltip="This is a tooltip"
    />
  );
};

export default DevTest;
