import React, { useState } from 'react';
import { PluginProvider, Button, Input, usePluginContext } from '../src';

// ตัวอย่างการใช้งานพื้นฐาน
const BasicExample: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const pluginConfig = {
    name: 'Contact Form Plugin',
    version: '1.0.0',
    description: 'A simple contact form plugin',
    author: 'Your Name',
  };

  const handleSubmit = (action: string, payload?: any) => {
    console.log('Form submitted:', { name, email });
    alert(`Hello ${name}! Your email ${email} has been saved.`);
  };

  return (
    <PluginProvider config={pluginConfig} onAction={handleSubmit}>
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <h2>Contact Form</h2>
        
        <Input
          label="ชื่อ"
          placeholder="กรอกชื่อของคุณ"
          value={name}
          onChange={setName}
        />
        
        <Input
          label="อีเมล"
          placeholder="กรอกอีเมลของคุณ"
          value={email}
          onChange={setEmail}
        />
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="primary"
            onClick={() => handleSubmit('submit', { name, email })}
          >
            ส่งข้อมูล
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => {
              setName('');
              setEmail('');
            }}
          >
            ล้างข้อมูล
          </Button>
        </div>
      </div>
    </PluginProvider>
  );
};

export default BasicExample;
