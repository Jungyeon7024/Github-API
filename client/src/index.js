import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
