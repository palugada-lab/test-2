import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CVPortfolio from './components/CVPortfolio';
import './index.css';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CVPortfolio />
  </StrictMode>
);
