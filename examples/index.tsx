import React, { useState } from 'react';
import BasicExample from './BasicUsage';
import AdvancedExample from './AdvancedUsage';
import CustomComponentExample from './CustomComponent';

// Demo selector component
const ExampleSelector: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<string>('basic');

  const examples = [
    { key: 'basic', label: 'Basic Usage', component: BasicExample },
    { key: 'advanced', label: 'Advanced Usage', component: AdvancedExample },
    { key: 'custom', label: 'Custom Components', component: CustomComponentExample },
  ];

  const SelectedComponent = examples.find(ex => ex.key === selectedExample)?.component || BasicExample;

  return (
    <div style={{ padding: '20px' }}>
      <h1>React TypeScript Plugin UI - Examples</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: '500' }}>
          Select Example:
        </label>
        <select
          value={selectedExample}
          onChange={(e) => setSelectedExample(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #e5e7eb',
            fontSize: '1rem'
          }}
        >
          {examples.map(example => (
            <option key={example.key} value={example.key}>
              {example.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ 
        border: '2px dashed #e5e7eb', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#fafafa'
      }}>
        <SelectedComponent />
      </div>
    </div>
  );
};

export default ExampleSelector;
