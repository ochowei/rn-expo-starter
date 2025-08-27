# My Project

This project is a monorepo containing a web application and a mobile application.

## Project Structure

The project is structured as a monorepo with the following directories:

- `apps/`: Contains the individual applications.
  - `apps/web/`: A simple web landing page.
  - `apps/mobile/`: A React Native mobile application built with Expo.
- `packages/`: Intended for shared code, such as UI components or utility functions. This is currently empty.

## Getting Started

### Web Application

The web application is a simple static HTML file. To view it, open `apps/web/index.html` in your browser.

### Mobile Application

The mobile application is built with React Native and Expo. To run it, navigate to the `apps/mobile` directory and follow the instructions in its `package.json` file.

```bash
cd apps/mobile
npm install
npm start
```
