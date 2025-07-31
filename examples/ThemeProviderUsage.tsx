import React, { useState } from 'react';
import { ThemeProvider, Button, Input } from '../src/index';
import { defaultTheme, darkTheme } from '../src/utils/theme';

// ตัวอย่างการใช้งาน ThemeProvider แทน PluginProvider
const ThemeProviderExample: React.FC = () => {
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
          ThemeProvider Example
        </h1>
        
        <p style={{ 
          color: currentTheme.colors.textSecondary,
          marginBottom: currentTheme.spacing.lg,
          lineHeight: '1.6'
        }}>
          ตัวอย่างการใช้งาน ThemeProvider ที่เน้นแค่การจัดการ theme 
          โดยไม่ต้องมี plugin-specific features
        </p>

        <div style={{ marginBottom: currentTheme.spacing.lg }}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>

        {/* ส่วนที่ใช้ ThemeProvider */}
        <ThemeProvider theme={currentTheme}>
          <div style={{
            padding: currentTheme.spacing.md,
            backgroundColor: currentTheme.colors.background,
            borderRadius: currentTheme.borderRadius.md,
            border: `1px solid ${currentTheme.colors.border}`,
            marginBottom: currentTheme.spacing.md
          }}>
            <h3 style={{ 
              color: currentTheme.colors.text,
              margin: `0 0 ${currentTheme.spacing.md} 0`
            }}>
              🎨 Components ใน ThemeProvider
            </h3>
            
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

            <div style={{ 
              display: 'flex', 
              gap: currentTheme.spacing.sm,
              marginTop: currentTheme.spacing.md
            }}>
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!name.trim() || !email.trim()}
              >
                ส่งข้อมูล
              </Button>
              
              <Button
                variant="secondary"
                onClick={handleClear}
              >
                ล้าง
              </Button>
            </div>
          </div>
        </ThemeProvider>

        {/* ส่วนที่ไม่ใช้ ThemeProvider */}
        <div style={{
          padding: currentTheme.spacing.md,
          backgroundColor: currentTheme.colors.background,
          borderRadius: currentTheme.borderRadius.md,
          border: `1px solid ${currentTheme.colors.border}`,
          marginBottom: currentTheme.spacing.md
        }}>
          <h3 style={{ 
            color: currentTheme.colors.text,
            margin: `0 0 ${currentTheme.spacing.md} 0`
          }}>
            🔧 Components นอก ThemeProvider
          </h3>
          
          <p style={{ 
            color: currentTheme.colors.textSecondary,
            marginBottom: currentTheme.spacing.sm,
            fontSize: '0.875rem'
          }}>
            Components เหล่านี้ใช้ defaultTheme หรือ theme prop
          </p>

          <div style={{ 
            display: 'flex', 
            gap: currentTheme.spacing.sm,
            flexWrap: 'wrap'
          }}>
            <Button variant="primary">
              Default Theme
            </Button>
            
            <Button 
              variant="secondary" 
              theme={darkTheme}
            >
              Dark Theme Prop
            </Button>
            
            <Button 
              variant="outline" 
              theme={currentTheme}
            >
              Current Theme Prop
            </Button>
          </div>
        </div>

        <div style={{
          marginTop: currentTheme.spacing.lg,
          padding: currentTheme.spacing.md,
          backgroundColor: isDark ? '#1f2937' : '#f0f9ff',
          borderRadius: currentTheme.borderRadius.md,
          border: `1px solid ${isDark ? '#374151' : '#0ea5e9'}`
        }}>
          <h4 style={{ 
            color: currentTheme.colors.text,
            margin: `0 0 ${currentTheme.spacing.sm} 0`
          }}>
            💡 ข้อดีของ ThemeProvider
          </h4>
          <ul style={{ 
            color: currentTheme.colors.textSecondary,
            lineHeight: '1.6',
            paddingLeft: currentTheme.spacing.lg,
            margin: 0,
            fontSize: '0.875rem'
          }}>
            <li>เน้นแค่การจัดการ theme ไม่มี plugin features</li>
            <li>ไม่จำเป็นต้องใช้กับทุก component</li>
            <li>Components ยังคงทำงานได้โดยไม่ต้องมี provider</li>
            <li>ใช้ theme prop หรือ defaultTheme เป็น fallback</li>
            <li>เหมาะสำหรับการใช้งานแบบยืดหยุ่น</li>
          </ul>
        </div>

        <div style={{
          marginTop: currentTheme.spacing.md,
          padding: currentTheme.spacing.sm,
          backgroundColor: currentTheme.colors.surface,
          borderRadius: currentTheme.borderRadius.sm,
          border: `1px solid ${currentTheme.colors.border}`
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

export default ThemeProviderExample;
