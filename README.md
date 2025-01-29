# DevLifeUI

A modern React component library built with CSS-in-JS using vanilla-extract.

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

## Components

### Button
```jsx
<Button
  variant="default" // 'default' | 'destructive' | 'outline'
  size="default" // 'sm' | 'default' | 'lg'
  onClick={() => {}}
>
  Click me
</Button>
```

### Tabs
```jsx
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' }
  ]}
  defaultTab="tab1"
  onChange={(tabId) => console.log(tabId)}
/>
```

## Development

1. Clone the repository
```bash
git clone https://github.com/Allen5288/DevLifeUI.git
cd DevLifeUI
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Run tests
```bash
npm run test
```

5. Start Storybook
```bash
npm run storybook
```

## Publishing to npm

1. Create an npm account if you don't have one
```bash
npm adduser
```

2. Update package.json
- Ensure the package name is unique
- Update version number
- Fill in author, license, and repository information
- Verify all dependencies are correctly listed

3. Test the build
```bash
npm run build
```

4. Test the package locally (optional)
```bash
npm pack
# Install the generated .tgz file in a test project
npm install ../path/to/devlife-ui-0.1.0.tgz
```

5. Publish to npm
```bash
npm publish
```

Note: For subsequent updates:
1. Update version in package.json
2. Run tests and build
3. Publish new version
```bash
npm version patch # or minor or major
npm publish
```

## Features

- 🎨 CSS-in-JS with vanilla-extract
- 📚 Storybook documentation
- ✅ Comprehensive testing
- 📦 TypeScript support
- 🛠 Vite-powered build system

## License

MIT © [Allen Xie]