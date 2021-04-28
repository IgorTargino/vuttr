import React from 'react';
import ReactDOM from 'react-dom';

import { ToolsProvider } from './context/ToolsContext';
import { ThemeContextProvider } from './context/ThemeContext';

import './styles/global.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ToolsProvider>
        <App />
      </ToolsProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
