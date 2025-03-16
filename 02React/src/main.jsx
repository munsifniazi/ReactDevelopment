import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Profile from './components/Profile';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile /> */}
  </StrictMode>,
);
