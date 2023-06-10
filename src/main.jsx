import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import Container from './components/Container/Container';
import './index.css';
import AuthProvider from './provider/AuthProvider';
import router from './routes/Routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
