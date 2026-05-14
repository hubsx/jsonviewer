# JSON Viewer with Onlook Storybook

An interactive JSON viewer component with Storybook integration and Onlook plugin support.

## Installation

```bash
npm install
```

## Development

Start Storybook:

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006`

## Features

- 📁 Expandable/collapsible tree view
- 🎨 Syntax highlighting
- 🔄 Support for nested objects and arrays
- 🎯 Onlook plugin integration for visual editing

## Stories

- **Basic** - Simple object with basic properties
- **Complex** - Nested objects and arrays with multiple levels
- **Array** - Array of objects
- **Collapsed** - Same as Complex but collapsed by default

## Project Structure

```
.
├── .storybook/              # Storybook configuration
│   ├── main.ts             # Main config with Onlook plugin
│   └── preview.ts          # Preview settings
├── src/
│   └── components/
│       ├── JsonViewer.tsx  # Main component
│       ├── JsonViewer.css  # Styles
│       └── JsonViewer.stories.tsx  # Storybook stories
└── package.json
