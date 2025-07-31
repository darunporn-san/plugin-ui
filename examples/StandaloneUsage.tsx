import React, { useState } from 'react';
import { Button, Input } from '../src/components';
import { defaultTheme, darkTheme } from '../src/utils/theme';

// ตัวอย่างการใช้งาน Button และ Input โดยไม่ต้องใช้ PluginContextProvider
const StandaloneExample: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDark, setIsDark] = useState(false);

  const currentTheme = isDark ? darkTheme : defaultTheme;

  const handleSubmit = () => {
    alert(`ส่งข้อมูลแล้ว!\nชื่อ: ${name}\nอีเมล: ${email}`);
  };

  const handleClear = () => {
    setName('');
    setEmail('');
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '500px', 
      margin: '0 auto',
      backgroundColor: currentTheme.colors.background,
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        backgroundColor: currentTheme.colors.surface,
        padding: currentTheme.spacing.xl,
        borderRadius: currentTheme.borderRadius.lg,
        border: `1px solid ${currentTheme.colors.border}`
      }}>
        <h1 style={{ 
          color: currentTheme.colors.text,
          marginBottom: currentTheme.spacing.lg 
        }}>
          Standalone Components Example
        </h1>
        
        <p style={{ 
          color: currentTheme.colors.textSecondary,
          marginBottom: currentTheme.spacing.lg,
          lineHeight: '1.6'
        }}>
          ตัวอย่างการใช้งาน Button และ Input โดยไม่ต้องใช้ PluginContextProvider
          แค่ส่ง theme เป็น prop ไปยัง component
        </p>

        <div style={{ marginBottom: currentTheme.spacing.lg }}>
          <Button
            variant="outline"
            size="sm"
            theme={currentTheme}
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>

        <Input
          label="ชื่อ"
          placeholder="กรอกชื่อของคุณ"
          value={name}
          onChange={setName}
          theme={currentTheme}
        />

        <Input
          label="อีเมล"
          placeholder="กรอกอีเมลของคุณ"
          value={email}
          onChange={setEmail}
          theme={currentTheme}
        />

        <div style={{ 
          display: 'flex', 
          gap: currentTheme.spacing.md,
          marginTop: currentTheme.spacing.md
        }}>
          <Button
            variant="primary"
            theme={currentTheme}
            onClick={handleSubmit}
            disabled={!name.trim() || !email.trim()}
          >
            ส่งข้อมูล
          </Button>
          
          <Button
            variant="secondary"
            theme={currentTheme}
            onClick={handleClear}
          >
            ล้างข้อมูล
          </Button>
          
          <Button
            variant="outline"
            theme={currentTheme}
            onClick={() => console.log('Debug:', { name, email, theme: isDark ? 'dark' : 'light' })}
          >
            Debug
          </Button>
        </div>

        <div style={{
          marginTop: currentTheme.spacing.xl,
          padding: currentTheme.spacing.md,
          backgroundColor: currentTheme.colors.background,
          borderRadius: currentTheme.borderRadius.md,
          border: `1px solid ${currentTheme.colors.border}`
        }}>
          <h3 style={{ 
            color: currentTheme.colors.text,
            margin: `0 0 ${currentTheme.spacing.sm} 0`
          }}>
            💡 การใช้งานแบบ Standalone
          </h3>
          <ul style={{ 
            color: currentTheme.colors.textSecondary,
            lineHeight: '1.6',
            paddingLeft: currentTheme.spacing.lg,
            margin: 0
          }}>
            <li>ไม่ต้องใช้ PluginContextProvider</li>
            <li>ส่ง theme เป็น prop ไปยัง component</li>
            <li>Components จะใช้ defaultTheme หากไม่ได้ส่ง theme prop</li>
            <li>เหมาะสำหรับการใช้งานใน project ที่มี component อื่นๆ อยู่แล้ว</li>
          </ul>
        </div>

        <div style={{
          marginTop: currentTheme.spacing.md,
          padding: currentTheme.spacing.sm,
          backgroundColor: isDark ? '#1f2937' : '#f0f9ff',
          borderRadius: currentTheme.borderRadius.sm,
          border: `1px solid ${isDark ? '#374151' : '#0ea5e9'}`
        }}>
          <p style={{ 
            color: currentTheme.colors.text,
            margin: 0,
            fontSize: '0.875rem'
          }}>
            <strong>Current State:</strong> Name: "{name}", Email: "{email}", Theme: {isDark ? 'Dark' : 'Light'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandaloneExample;
