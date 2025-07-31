import React, { useState } from 'react';
import { PluginProvider, Button, Input } from './components';
import { defaultTheme, darkTheme } from './utils/theme';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const pluginConfig = {
    name: 'Demo Plugin',
    version: '1.0.0',
    description: 'A demo plugin showcasing the React TypeScript Plugin UI framework',
    author: 'Plugin Developer',
  };

  const handleAction = (action: string, payload?: any) => {
    console.log('Plugin Action:', action, payload);
    
    if (action === 'submit') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert(`Submitted: ${payload}`);
      }, 2000);
    }
  };

  const currentTheme = isDark ? darkTheme : defaultTheme;

  return (
    <PluginProvider
      config={pluginConfig}
      theme={currentTheme}
      onAction={handleAction}
    >
      <div style={{ 
        padding: currentTheme.spacing.xl,
        minHeight: '100vh',
        backgroundColor: currentTheme.colors.background 
      }}>
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          backgroundColor: currentTheme.colors.surface,
          padding: currentTheme.spacing.xl,
          borderRadius: currentTheme.borderRadius.lg,
          border: `1px solid ${currentTheme.colors.border}`
        }}>
          <h1 style={{ 
            color: currentTheme.colors.text,
            marginBottom: currentTheme.spacing.lg,
            fontSize: '2rem',
            fontWeight: '600'
          }}>
            {pluginConfig.name}
          </h1>
          
          <p style={{ 
            color: currentTheme.colors.textSecondary,
            marginBottom: currentTheme.spacing.xl,
            lineHeight: '1.6'
          }}>
            {pluginConfig.description}
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

          <Input
            label="Enter some text"
            placeholder="Type something here..."
            value={inputValue}
            onChange={setInputValue}
          />

          <div style={{ 
            display: 'flex', 
            gap: currentTheme.spacing.md,
            flexWrap: 'wrap'
          }}>
            <Button
              variant="primary"
              loading={loading}
              onClick={() => handleAction('submit', inputValue)}
            >
              Submit
            </Button>
            
            <Button
              variant="secondary"
              onClick={() => setInputValue('')}
            >
              Clear
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleAction('info', { version: pluginConfig.version })}
            >
              Plugin Info
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
              marginBottom: currentTheme.spacing.sm,
              fontSize: '1.125rem'
            }}>
              Plugin Details
            </h3>
            <ul style={{ 
              color: currentTheme.colors.textSecondary,
              lineHeight: '1.6',
              paddingLeft: currentTheme.spacing.lg
            }}>
              <li>Version: {pluginConfig.version}</li>
              <li>Author: {pluginConfig.author}</li>
              <li>Theme: {isDark ? 'Dark' : 'Light'}</li>
            </ul>
          </div>
        </div>
      </div>
    </PluginProvider>
  );
};

export default App;
