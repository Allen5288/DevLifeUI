import React from 'react';
import { Button } from './components/button/button';
import { Tabs } from './components/tabs/tabs';

function App() {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content 3' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>DevLifeUI Components</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button>Default Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2>Tabs</h2>
        <Tabs tabs={tabs} />
      </section>
    </div>
  );
}

export default App;