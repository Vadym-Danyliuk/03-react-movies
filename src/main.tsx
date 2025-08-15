import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from './components/App/App';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);