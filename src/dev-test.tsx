import React, { useState } from 'react';
import { PluginProvider, Button, Input } from './components';
import { defaultTheme, darkTheme } from './utils/theme';

// ไฟล์สำหรับทดสอบ development โดยไม่ต้อง build
const DevTest: React.FC = () => {
  const [name, setName] = useState('');
  const [isDark, setIsDark] = useState(false);

  const pluginConfig = {
    name: 'Development Test',
    version: '1.0.0',
    description: 'Testing plugin components during development',
  };

  const handleAction = (action: string, payload?: any) => {
    console.log('Action:', action, payload);
    alert(`Action: ${action} with payload: ${JSON.stringify(payload)}`);
  };

  return (
    <PluginProvider 
      config={pluginConfig} 
      theme={isDark ? darkTheme : defaultTheme}
      onAction={handleAction}
    >
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1>Plugin Development Test</h1>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsDark(!isDark)}
          style={{ marginBottom: '20px' }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>

        <Input
          label="ชื่อของคุณ"
          placeholder="กรอกชื่อ..."
          value={name}
          onChange={setName}
        />

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Button
            variant="primary"
            onClick={() => handleAction('submit', { name })}
          >
            ส่งข้อมูล
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => setName('')}
          >
            ล้าง
          </Button>
        </div>

        <div style={{ marginTop: '20px', fontSize: '0.875rem', opacity: 0.7 }}>
          <p>🔧 Development Mode</p>
          <p>Theme: {isDark ? 'Dark' : 'Light'}</p>
          <p>Name: {name || 'ไม่ได้กรอก'}</p>
        </div>
      </div>
    </PluginProvider>
  );
};

export default DevTest;
