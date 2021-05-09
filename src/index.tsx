import React from 'react';
import ReactDOM from 'react-dom';

import { ToolsProvider } from './context/ToolsContext';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';

import './styles/global.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ToolsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ToolsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
