import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router';
import { LenisWrapper } from './utils/Lenis/LenisWrapper';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisWrapper>
      <RouterProvider router={router} />
    </LenisWrapper>
  </StrictMode>
);