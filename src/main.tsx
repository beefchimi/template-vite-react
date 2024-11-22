import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Internal styles
import './styles/reset.css';
import './styles/fonts.css';
import './styles/media-queries.css';
import './styles/design-system.css';
import './styles/keyframes.css';
import './styles/global.css';
import './styles/utility.css';

import {App} from './App.tsx';

createRoot(document.getElementById('ReactRoot')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
