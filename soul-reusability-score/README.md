# Soul Reusability Score Plugin

A Figma plugin to calculate the reusability of your design components with precision and simplicity.

## Getting Started

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

## Features

- **Dynamic Reusability Calculation**  
  Input total and reused numbers to get an instant reusability score.

- **Optional File Insights**  
  Add file name and link for richer context.

- **Figma Integration**  
  Generates a text node directly in your Figma file, appends the Score to the frame which you have selected.

## Development Setup

1. **Use Visual Studio Code**  
   Download VS Code for an optimal development environment.

2. **Compile TypeScript to JavaScript**  
   - Open your plugin directory in VS Code.
   - Go to Terminal > Run Build Task… / cmd + shift + B and select npm: watch.