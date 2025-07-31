import React, { useState } from 'react';
import { PluginProvider, usePluginContext } from '../src/index';

// สร้าง Custom Component ที่ใช้ theme จาก context
const CustomCard: React.FC<{ title: string; children: React.ReactNode }> = ({ 
  title, 
  children 
}) => {
  const { theme } = usePluginContext();
  
  return (
    <div style={{
      backgroundColor: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.md,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{
        color: theme.colors.text,
        margin: `0 0 ${theme.spacing.md} 0`,
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <div style={{ color: theme.colors.textSecondary }}>
        {children}
      </div>
    </div>
  );
};

// Custom Button ที่มี style พิเศษ
const CustomButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'success' | 'warning' | 'error';
}> = ({ children, onClick, type = 'success' }) => {
  const { theme } = usePluginContext();
  
  const getTypeColor = () => {
    switch (type) {
      case 'success': return theme.colors.success;
      case 'warning': return theme.colors.warning;
      case 'error': return theme.colors.error;
      default: return theme.colors.primary;
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: getTypeColor(),
        color: '#ffffff',
        border: 'none',
        borderRadius: theme.borderRadius.md,
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        margin: `0 ${theme.spacing.xs} ${theme.spacing.xs} 0`
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.opacity = '0.9';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
};

// ตัวอย่างการสร้าง Custom Components
const CustomComponentExample: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const pluginConfig = {
    name: 'Custom Components Demo',
    version: '1.0.0',
    description: 'Demonstrating custom component creation',
  };

  const addNotification = (message: string, type: string) => {
    const notification = `[${type.toUpperCase()}] ${message}`;
    setNotifications(prev => [...prev, notification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <PluginProvider config={pluginConfig}>
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h1>Custom Components Example</h1>
        
        <CustomCard title="🎨 Custom Styled Components">
          <p>นี่คือตัวอย่างการสร้าง Custom Component ที่ใช้ theme จาก Plugin Context</p>
          <p>คุณสามารถเข้าถึง theme colors, spacing, และ border radius ได้ทุกที่</p>
        </CustomCard>

        <CustomCard title="🔘 Custom Buttons">
          <p>ปุ่มที่มี style และสีต่างๆ ตาม theme:</p>
          <div style={{ marginTop: '12px' }}>
            <CustomButton 
              type="success"
              onClick={() => addNotification('Success action completed!', 'success')}
            >
              ✅ Success
            </CustomButton>
            
            <CustomButton 
              type="warning"
              onClick={() => addNotification('Warning: Please check your input', 'warning')}
            >
              ⚠️ Warning
            </CustomButton>
            
            <CustomButton 
              type="error"
              onClick={() => addNotification('Error: Something went wrong', 'error')}
            >
              ❌ Error
            </CustomButton>
          </div>
        </CustomCard>

        <CustomCard title="📝 Notifications">
          {notifications.length === 0 ? (
            <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
              ไม่มีการแจ้งเตือน - กดปุ่มด้านบนเพื่อทดสอบ
            </p>
          ) : (
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  style={{
                    padding: '8px 12px',
                    marginBottom: '4px',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderLeft: '3px solid #3b82f6',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace'
                  }}
                >
                  {notification}
                </div>
              ))}
              <CustomButton 
                type="error"
                onClick={clearNotifications}
              >
                🗑️ Clear All
              </CustomButton>
            </div>
          )}
        </CustomCard>

        <CustomCard title="💡 Tips for Custom Components">
          <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>ใช้ <code>usePluginContext()</code> เพื่อเข้าถึง theme และ functions</li>
            <li>Theme มี colors, spacing, และ borderRadius ให้ใช้</li>
            <li>สามารถสร้าง reusable components ได้ง่าย</li>
            <li>รองรับ TypeScript เต็มรูปแบบ</li>
          </ul>
        </CustomCard>
      </div>
    </PluginProvider>
  );
};

export default CustomComponentExample;
