# React TypeScript Plugin UI Framework

A modern, type-safe React framework for building plugin user interfaces with TypeScript support.

## Features

- 🚀 **Modern React 18** with TypeScript
- 🎨 **Theming Support** - Light/Dark themes with customizable colors
- 🧩 **Plugin Architecture** - Structured plugin development framework
- 📱 **Responsive Components** - Pre-built UI components (Button, Input, etc.)
- 🔧 **Developer Experience** - Full TypeScript support with type definitions
- ⚡ **Vite Build System** - Fast development and optimized builds

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Input.tsx       # Input component with validation
│   ├── PluginProvider.tsx # Context provider for plugins
│   └── index.ts        # Component exports
├── hooks/              # Custom React hooks
│   └── usePluginContext.ts # Plugin context hook
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
├── utils/              # Utility functions and constants
│   └── theme.ts        # Theme definitions
├── App.tsx             # Demo application
├── main.tsx            # Application entry point
└── index.ts            # Library exports
```

## Usage

### Basic Plugin Setup

```tsx
import React from 'react';
import { PluginProvider, Button, Input } from 'react-plugin-ui';

const MyPlugin = () => {
  const pluginConfig = {
    name: 'My Plugin',
    version: '1.0.0',
    description: 'A sample plugin',
  };

  const handleAction = (action: string, payload?: any) => {
    console.log('Action:', action, payload);
  };

  return (
    <PluginProvider config={pluginConfig} onAction={handleAction}>
      <div>
        <h1>My Plugin</h1>
        <Input label="Enter text" placeholder="Type here..." />
        <Button variant="primary" onClick={() => handleAction('submit')}>
          Submit
        </Button>
      </div>
    </PluginProvider>
  );
};
```

### Using Custom Themes

```tsx
import { PluginProvider, darkTheme } from 'react-plugin-ui';

<PluginProvider config={config} theme={darkTheme}>
  {/* Your plugin content */}
</PluginProvider>
```

### Creating Custom Components

```tsx
import { usePluginContext } from 'react-plugin-ui';

const CustomComponent = () => {
  const { theme, onAction } = usePluginContext();
  
  return (
    <div style={{ color: theme.colors.text }}>
      Custom component with theme support
    </div>
  );
};
```

## Available Components

### Button
- **Variants**: `primary`, `secondary`, `outline`
- **Sizes**: `sm`, `md`, `lg`
- **States**: `disabled`, `loading`

### Input
- **Features**: Label, placeholder, validation, error states
- **States**: `disabled`, `error`

### PluginProvider
- **Features**: Context management, theme provider, action handling

## Type Definitions

The framework includes comprehensive TypeScript definitions:

- `PluginConfig` - Plugin metadata
- `PluginContext` - Plugin runtime context
- `Theme` - Theme structure
- `ButtonProps` - Button component props
- `InputProps` - Input component props

## Theming

### Default Theme Structure

```typescript
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}
```

## Development

### Adding New Components

1. Create component in `src/components/`
2. Add TypeScript interface in `src/types/`
3. Export from `src/components/index.ts`
4. Update main `src/index.ts`

### Custom Hooks

Use the `usePluginContext` hook to access:
- Plugin configuration
- Current theme
- Action handler function

## Building for Production

The project can be built as:
- **Library**: For distribution as an npm package
- **Application**: For standalone deployment

```bash
npm run build  # Creates both ES modules and UMD builds
```

## License

MIT
