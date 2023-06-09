import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import Container from './components/Container/Container';
import './index.css';
import AuthProvider from './provider/AuthProvider';
import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
