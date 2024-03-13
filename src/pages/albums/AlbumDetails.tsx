import * as stylex from '@stylexjs/stylex';
import { spaces } from '../../base/tokens.stylex';

import Photo from './Photo';

import type { Photo as PhotoType } from './types';

interface AlbumDetailsProps {
  photos: PhotoType[]
}

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: `${spaces.spacingXL}`,
    flexWrap: 'wrap'
  }
});

export default function AlbumDetails ({ photos }: AlbumDetailsProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {
        photos.map(({ id, title, thumbnailUrl }) => {
          return <Photo key={id} title={title} thumbnailUrl={thumbnailUrl} />
        })
      }
    </div>
  );
}