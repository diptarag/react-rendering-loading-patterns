import * as stylex from '@stylexjs/stylex';
import { spaces } from '../../base/tokens.stylex';

import { API_ENDPOINT_BASE_PATH } from '../../global';
import useFetch from '../../base/hooks/useFetch';

import Loader from '../components/Loader';
import Photo from './Photo';

interface AlbumDetailsProps {
  albumId: string
}

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: `${spaces.spacingXL}`,
    flexWrap: 'wrap'
  }
});

export default function AlbumDetails ({ albumId }: AlbumDetailsProps) {
  const { data, fetchStatus } = useFetch<Photo[]>(`${API_ENDPOINT_BASE_PATH}/albums/${albumId}/photos`);

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }

  return (
    <div {...stylex.props(styles.container)}>
      {
        data.map(({ id, title, thumbnailUrl }) => {
          return <Photo key={id} title={title} thumbnailUrl={thumbnailUrl} />
        })
      }
    </div>
  );
}