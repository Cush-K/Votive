import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import routes from './components/Routes';
import { AuthProvider } from './components/AuthContext';
import { SnackbarProvider } from 'notistack';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={10000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
)