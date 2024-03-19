import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import Albums from './pages/albums';
import ToDos from './pages/ToDos.tsx';
import Posts from './pages/posts';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<Layout />}>
        <Route path='albums/:albumsId?' element={<Albums />} />
        <Route path='posts/:postId?' element={<Posts />} />
        <Route path='todos' element={<ToDos />} />
      </Route>
    </Routes>
  );
}