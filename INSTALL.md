# Installation Guide

## วิธีการติดตั้งและใช้งาน @darunporn-san/plugin-ui

### 1. ติดตั้งจาก GitHub

```bash
# ติดตั้งจาก GitHub repository
npm install git+https://github.com/darunporn-san/plugin-ui.git

# หรือใช้ yarn
yarn add git+https://github.com/darunporn-san/plugin-ui.git
```

### 2. ติดตั้งจาก npm (หลังจาก publish)

```bash
# ติดตั้งจาก npm registry
npm install @darunporn-san/plugin-ui

# หรือใช้ yarn
yarn add @darunporn-san/plugin-ui
```

### 3. การใช้งานพื้นฐาน

```tsx
import React, { useState } from 'react';
import { PluginProvider, Button, Input } from '@darunporn-san/plugin-ui';

const MyApp = () => {
  const [name, setName] = useState('');

  const pluginConfig = {
    name: 'My Plugin',
    version: '1.0.0',
    description: 'My awesome plugin',
  };

  const handleAction = (action: string, payload?: any) => {
    console.log('Action:', action, payload);
  };

  return (
    <PluginProvider config={pluginConfig} onAction={handleAction}>
      <div>
        <h1>My Plugin UI</h1>
        <Input
          label="Your Name"
          placeholder="Enter your name"
          value={name}
          onChange={setName}
        />
        <Button
          variant="primary"
          onClick={() => handleAction('submit', { name })}
        >
          Submit
        </Button>
      </div>
    </PluginProvider>
  );
};

export default MyApp;
```

### 4. การใช้งานขั้นสูง

```tsx
import React from 'react';
import { 
  PluginProvider, 
  Button, 
  Input, 
  usePluginContext,
  darkTheme 
} from '@darunporn-san/plugin-ui';

// Custom component ที่ใช้ theme
const CustomComponent = () => {
  const { theme, onAction } = usePluginContext();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md 
    }}>
      <p style={{ color: theme.colors.text }}>
        Custom component with theme support
      </p>
    </div>
  );
};

const AdvancedApp = () => {
  const pluginConfig = {
    name: 'Advanced Plugin',
    version: '2.0.0',
  };

  return (
    <PluginProvider 
      config={pluginConfig} 
      theme={darkTheme}
      onAction={(action, payload) => console.log(action, payload)}
    >
      <CustomComponent />
    </PluginProvider>
  );
};
```

### 5. Available Components

- **PluginProvider**: Context provider สำหรับ plugin
- **Button**: ปุ่มพร้อม variants (primary, secondary, outline)
- **Input**: Input field พร้อม label และ validation
- **usePluginContext**: Hook สำหรับเข้าถึง theme และ functions

### 6. TypeScript Support

Package นี้รองรับ TypeScript เต็มรูปแบบ:

```tsx
import type { 
  PluginConfig, 
  Theme, 
  ButtonProps, 
  InputProps 
} from '@darunporn-san/plugin-ui';
```

### 7. Peer Dependencies

ตรวจสอบให้แน่ใจว่าโปรเจคของคุณมี dependencies เหล่านี้:

```json
{
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
```

### 8. Troubleshooting

หากมีปัญหาในการติดตั้ง:

1. ตรวจสอบ Node.js version (แนะนำ >= 16)
2. ล้าง npm cache: `npm cache clean --force`
3. ลบ node_modules และ package-lock.json แล้วติดตั้งใหม่

### 9. Examples

ดูตัวอย่างการใช้งานเพิ่มเติมใน:
- [Basic Usage](./examples/BasicUsage.tsx)
- [Advanced Usage](./examples/AdvancedUsage.tsx)
- [Custom Components](./examples/CustomComponent.tsx)
