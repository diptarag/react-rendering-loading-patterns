import { useAsyncValue } from 'react-router-dom';

import SidebarLayout from '../components/SidebarLayout';
import AlbumDetails from './AlbumDetails';

import type { Album, Photo } from './types';

import LazyDataLoad from '../components/LazyDataLoad';

interface AlbumDetailsData {
  data: Array<object>
}

function Albums () {
  const albumDetails = useAsyncValue() as Array<AlbumDetailsData>;

  if (!albumDetails || !Array.isArray(albumDetails)) {
    return null;
  }

  const data = albumDetails[0].data as Album[];


  return (
    <SidebarLayout data={data.map(({ id, title }) => {
      return {
        key: id.toString(),
        label: title,
        route: `/albums/${id}`
      }
    })}>
      {
        albumDetails.length > 1 ? <AlbumDetails photos={albumDetails[1].data as Photo[]} /> : <h1>Select an album to load photos</h1>
      }
    </SidebarLayout>
  );
}

export default function LazyAlbums () {
  return (
    <LazyDataLoad lazyResolveField='albumDetails'>
      <Albums />
    </LazyDataLoad>
  );
}