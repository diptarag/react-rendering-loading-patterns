import { useLoaderData, useNavigation } from 'react-router-dom';

import Loader from '../components/Loader';
import SidebarLayout from '../components/SidebarLayout';
import AlbumDetails from './AlbumDetails';

import type { Album, Photo } from './types';

interface LoaderData {
  albums: Album[],
  photos?: Photo[]
}

export default function Albums () {
  const { albums: data, photos } = useLoaderData() as LoaderData;
  const { state } = useNavigation();

  if (state === 'loading' || !data) {
    return <Loader />;
  }

  return (
    <SidebarLayout data={data.map(({ id, title }) => {
      return {
        key: id.toString(),
        label: title,
        route: `/albums/${id}`
      }
    })}>
      {
        photos ? <AlbumDetails photos={photos} /> : <h1>Select an album to load photos</h1>
      }
    </SidebarLayout>
  );
}