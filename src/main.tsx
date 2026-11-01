import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// Self-hosted fonts: no third-party font host, and full Vietnamese glyphs on every device.
// Each file declares Latin and Vietnamese faces with unicode-range, so browsers only fetch the subsets in use.
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/lora/400.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
