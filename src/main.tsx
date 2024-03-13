import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';

import Layout from './pages/Layout.tsx';

import { ToDos, Home, Albums, Posts } from './lazy-imports';
import LazyLoad from './pages/components/LazyLoad';

import { API_ENDPOINT_BASE_PATH, USER_ID} from './global';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      const userData = await axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}`);
      return { userData };
    },
    element: <LazyLoad><Home /></LazyLoad>
  },
  {
    element: <Layout />,
    children: [
      {
        id: 'albums',
        path: 'albums/:albumsId?',
        loader: async ({ params }) => {
          const albums = axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/albums`);
          if (params.albumsId) {
            const data = await Promise.all([albums, axios.get(`${API_ENDPOINT_BASE_PATH}/albums/${params.albumsId}/photos`)]);
            return {
              albums: data[0].data,
              photos: data[1].data
            }
          } else {
            return { albums: (await albums).data };
          }
        },
        element: <LazyLoad><Albums /></LazyLoad>
      },
      {
        path: 'todos',
        loader: async () => {
          const todos = (await axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/todos`)).data;
          return { todos };
        },
        element: <LazyLoad><ToDos /></LazyLoad>
      },
      {
        id: 'posts',
        path: 'posts/:postId?',
        loader: async ({ params }) => {
          const posts = axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/posts`);
          if (params.postId) {
            const data = await Promise.all([posts, axios.get(`${API_ENDPOINT_BASE_PATH}/posts/${params.postId}/comments`)]);
            return {
              posts: data[0].data,
              comments: data[1].data
            }
          } else {
            return { posts: (await posts).data };
          }
        },
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
