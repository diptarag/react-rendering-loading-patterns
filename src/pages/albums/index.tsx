import { useMatches } from 'react-router-dom';

import { API_ENDPOINT_BASE_PATH, USER_ID } from '../../global';
import useFetch from '../../base/hooks/useFetch';

import Loader from '../components/Loader';
import SidebarLayout from '../components/SidebarLayout';
import AlbumDetails from './AlbumDetails';

interface Album {
  userId: number,
  id: number,
  title: string
}

export default function Albums () {
  const { data, fetchStatus } = useFetch<Album[]>(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/albums`);
  const matches = useMatches();

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }

  const albumId = matches.find((match) => match.id === 'albums')?.params.albumsId;

  return (
    <SidebarLayout data={data.map(({ id, title }) => {
      return {
        key: id.toString(),
        label: title,
        route: `/albums/${id}`
      }
    })}>
      {
        albumId ? <AlbumDetails albumId={albumId} /> : <h1>Select an album to load photos</h1>
      }
    </SidebarLayout>
  );
}