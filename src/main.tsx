import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout.tsx';

import { ToDos, Home, Albums, Posts } from './lazy-imports';
import LazyLoad from './pages/components/LazyLoad';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyLoad><Home /></LazyLoad>
  },
  {
    element: <Layout />,
    children: [
      {
        id: 'albums',
        path: 'albums/:albumsId?',
        element: <LazyLoad><Albums /></LazyLoad>
      },
      {
        path: 'todos',
        element: <LazyLoad><ToDos /></LazyLoad>
      },
      {
        id: 'posts',
        path: 'posts/:postId?',
        element: <LazyLoad><Posts /></LazyLoad>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
