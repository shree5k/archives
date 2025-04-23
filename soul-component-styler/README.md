# Soul Component Styler

A simple Figma plugin that helps style your component sets quickly. It applies consistent colors, strokes, and corner radii, making it easy to identify and maintain the style of Component sets.

## 🚀 Getting Started

Follow these steps to set up the plugin:

1. **Install Node.js**  
   Download Node.js, which includes NPM for managing dependencies.

2. **Install TypeScript**  
   Open your terminal and run:
   ```bash
   npm install -g typescript
   ```

3. **Add Figma Plugin Typings**  
   Fetch the latest type definitions for the Figma Plugin API:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

## 🎯 Features

- **Color Application**
  Change fill and stroke colors easily.

- **Stroke Adjustments**
  Set stroke weight and dash patterns.

- **Corner Radius Updates**
  Modify the corner radius.

- **Style Consistency**
  Helps maintain a uniform look across your components, making it easier to identify Component sets at a glance.


## 🛠 Development Setup

1. **Use Visual Studio Code**  
   Download VS Code for an optimal development environment.

2. **Compile TypeScript to JavaScript**  
   - Open your plugin directory in VS Code.
   - Go to Terminal > Run Build Task… / cmd + shift + B and select npm: watch.