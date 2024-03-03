import React from 'react';

const ToDos = React.lazy(() => import('./pages/ToDos'));
const Home = React.lazy(() => import('./pages/Home'));
const Albums = React.lazy(() => import('./pages/albums/Albums'));
const Posts = React.lazy(() => import('./pages/posts/Posts'));

export { ToDos, Home, Albums, Posts }