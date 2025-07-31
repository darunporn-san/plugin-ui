# Usage Examples - การใช้งานที่ถูกต้อง

## วิธีการ Import ที่ถูกต้อง

### 1. การติดตั้งจาก GitHub
```bash
npm install git+https://github.com/darunporn-san/plugin-ui.git
```

### 2. การ Import ในโปรเจค

#### วิธีที่ 1: Import หลัก (แนะนำ)
```tsx
import { PluginProvider, Button, Input } from '@darunporn-san/plugin-ui';
```

#### วิธีที่ 2: Import จาก ES Module (ถ้าวิธีที่ 1 ไม่ได้)
```tsx
import { PluginProvider, Button, Input } from '@darunporn-san/plugin-ui/dist/react-plugin-ui.es.js';
```

#### วิธีที่ 3: Import จาก UMD (สำหรับ CommonJS)
```tsx
const { PluginProvider, Button, Input } = require('@darunporn-san/plugin-ui/dist/react-plugin-ui.umd.js');
```

## ตัวอย่างการใช้งาน

### Basic Example
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
      <div style={{ padding: '20px' }}>
        <h1>My Plugin</h1>
        <Input
          label="ชื่อ"
          placeholder="กรอกชื่อของคุณ"
          value={name}
          onChange={setName}
        />
        <Button
          variant="primary"
          onClick={() => handleAction('submit', { name })}
        >
          ส่งข้อมูล
        </Button>
      </div>
    </PluginProvider>
  );
};

export default MyApp;
```

### Advanced Example with Dark Theme
```tsx
import React, { useState } from 'react';
import { 
  PluginProvider, 
  Button, 
  Input, 
  usePluginContext,
  darkTheme 
} from '@darunporn-san/plugin-ui';

const CustomComponent = () => {
  const { theme, onAction } = usePluginContext();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      border: `1px solid ${theme.colors.border}`
    }}>
      <p style={{ color: theme.colors.text }}>
        Custom component with theme support
      </p>
    </div>
  );
};

const AdvancedApp = () => {
  const [isDark, setIsDark] = useState(false);

  const pluginConfig = {
    name: 'Advanced Plugin',
    version: '2.0.0',
    description: 'Advanced plugin with theme support',
  };

  return (
    <PluginProvider 
      config={pluginConfig} 
      theme={isDark ? darkTheme : undefined}
      onAction={(action, payload) => console.log(action, payload)}
    >
      <div style={{ padding: '20px' }}>
        <Button
          variant="outline"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
        <CustomComponent />
      </div>
    </PluginProvider>
  );
};
```

## การแก้ไขปัญหา Import

### ปัญหา: "Module not found: Can't resolve '@darunporn-san/plugin-ui'"

**วิธีแก้:**

1. **ตรวจสอบการติดตั้ง:**
```bash
npm list @darunporn-san/plugin-ui
```

2. **ลองติดตั้งใหม่:**
```bash
npm uninstall @darunporn-san/plugin-ui
npm install git+https://github.com/darunporn-san/plugin-ui.git
```

3. **ใช้ direct import path:**
```tsx
import { PluginProvider, Button, Input } from '@darunporn-san/plugin-ui/dist/react-plugin-ui.es.js';
```

4. **สำหรับ TypeScript, เพิ่มใน tsconfig.json:**
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### ปัญหา: Type definitions ไม่พบ

**วิธีแก้:**

1. **เพิ่มใน tsconfig.json:**
```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./node_modules/@darunporn-san/plugin-ui/dist"]
  }
}
```

2. **หรือใช้ triple-slash directive:**
```tsx
/// <reference types="@darunporn-san/plugin-ui" />
import { PluginProvider, Button, Input } from '@darunporn-san/plugin-ui';
```

## Build Requirements

ตรวจสอบให้แน่ใจว่าโปรเจคของคุณมี:

```json
{
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
```

และติดตั้ง dependencies ที่จำเป็น:
```bash
npm install react react-dom @types/react @types/react-dom
```
