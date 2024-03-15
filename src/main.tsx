import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
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
      const userData = axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}`);
      return defer({ userData });
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
          const promiseArr = [albums];
          if (params.albumsId) {
            promiseArr.push(axios.get(`${API_ENDPOINT_BASE_PATH}/albums/${params.albumsId}/photos`));
          }
          return defer({
            albumDetails: Promise.all(promiseArr)
          });
        },
        element: <LazyLoad><Albums /></LazyLoad>
      },
      {
        path: 'todos',
        loader: async () => {
          const todos = axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/todos`);
          return defer({ todos });
        },
        element: <LazyLoad><ToDos /></LazyLoad>
      },
      {
        id: 'posts',
        path: 'posts/:postId?',
        loader: async ({ params }) => {
          const posts = axios.get(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/posts`);
          const promiseArr = [posts];
          if (params.postId) {
            promiseArr.push(axios.get(`${API_ENDPOINT_BASE_PATH}/posts/${params.postId}/comments`));
          }
          return defer({
            postsDetails: Promise.all(promiseArr)
          });
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
