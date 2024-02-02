import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'src/scss/main.css';
import { SettingsProvider } from 'src/context/SettingsContext';

const root = document.getElementById('root');

// Check if createRoot is available (React 18+)
const rootInstance = createRoot(root);
rootInstance.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);

serviceWorker.unregister();
