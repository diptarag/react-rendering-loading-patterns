import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Albums from './pages/albums';
import ToDos from './pages/ToDos.tsx';
import Posts from './pages/Posts.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <Layout />,
    children: [
      {
        id: 'albums',
        path: 'albums/:albumsId?',
        element: <Albums />
      },
      {
        path: 'todos',
        element: <ToDos />
      },
      {
        path: 'posts',
        element: <Posts />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
