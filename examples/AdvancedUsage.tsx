import React, { useState } from 'react';
import { PluginProvider, Button, Input, usePluginContext, darkTheme } from '../src';

// Component ที่ใช้ usePluginContext
const ThemeToggler: React.FC = () => {
  const { theme, onAction } = usePluginContext();
  
  return (
    <div style={{ 
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      border: `1px solid ${theme.colors.border}`,
      marginBottom: theme.spacing.lg
    }}>
      <h3 style={{ color: theme.colors.text, margin: 0 }}>
        Current Theme Colors
      </h3>
      <p style={{ color: theme.colors.textSecondary, fontSize: '0.875rem' }}>
        Primary: {theme.colors.primary} | Background: {theme.colors.background}
      </p>
    </div>
  );
};

// ตัวอย่างการใช้งานขั้นสูงพร้อม Dark Theme
const AdvancedExample: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });
  const [isLoading, setIsLoading] = useState(false);

  const pluginConfig = {
    name: 'Task Manager Plugin',
    version: '2.0.0',
    description: 'Advanced task management with theme support',
    author: 'Plugin Developer',
  };

  const handleAction = async (action: string, payload?: any) => {
    console.log(`Action: ${action}`, payload);
    
    switch (action) {
      case 'create_task':
        setIsLoading(true);
        // จำลองการส่งข้อมูลไปยัง API
        setTimeout(() => {
          setIsLoading(false);
          alert(`Task "${formData.title}" created successfully!`);
          setFormData({ title: '', description: '', priority: 'medium' });
        }, 2000);
        break;
        
      case 'toggle_theme':
        setIsDarkMode(!isDarkMode);
        break;
        
      case 'reset_form':
        setFormData({ title: '', description: '', priority: 'medium' });
        break;
    }
  };

  const currentTheme = isDarkMode ? darkTheme : undefined;

  return (
    <PluginProvider 
      config={pluginConfig} 
      theme={currentTheme}
      onAction={handleAction}
    >
      <div style={{ padding: '20px', maxWidth: '500px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>Task Manager</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleAction('toggle_theme')}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>

        <ThemeToggler />
        
        <Input
          label="Task Title"
          placeholder="Enter task title..."
          value={formData.title}
          onChange={(value) => setFormData({ ...formData, title: value })}
        />
        
        <Input
          label="Description"
          placeholder="Enter task description..."
          value={formData.description}
          onChange={(value) => setFormData({ ...formData, description: value })}
        />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '4px', 
            fontSize: '0.875rem', 
            fontWeight: '500' 
          }}>
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            loading={isLoading}
            onClick={() => handleAction('create_task', formData)}
            disabled={!formData.title.trim()}
          >
            {isLoading ? 'Creating...' : 'Create Task'}
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => handleAction('reset_form')}
          >
            Reset
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleAction('export_data', formData)}
          >
            Export
          </Button>
        </div>

        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
          borderRadius: '8px',
          border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: isDarkMode ? '#f9fafb' : '#111827' }}>
            Plugin Info
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '20px', 
            color: isDarkMode ? '#9ca3af' : '#6b7280',
            fontSize: '0.875rem'
          }}>
            <li>Name: {pluginConfig.name}</li>
            <li>Version: {pluginConfig.version}</li>
            <li>Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</li>
            <li>Status: {isLoading ? 'Processing...' : 'Ready'}</li>
          </ul>
        </div>
      </div>
    </PluginProvider>
  );
};

export default AdvancedExample;
