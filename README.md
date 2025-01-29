# DevLifeUI

A modern React component library built with CSS-in-JS using vanilla-extract. devLife Go

## Installation

```bash
npm install devlife-ui
```

## Usage

```jsx
import { Button, Tabs } from 'devlife-ui';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Tabs tabs={[
        { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
        { id: 'tab2', label: 'Tab 2', content: 'Content 2' }
      ]} />
    </div>
  );
}
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook static site

## Features

- 🎨 CSS-in-JS with vanilla-extract
- 📚 Storybook documentation
- ✅ Comprehensive testing
- 📦 TypeScript support
- 🛠 Vite-powered build system
