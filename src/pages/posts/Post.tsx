import React from 'react';
import * as stylex from '@stylexjs/stylex';

import LazyLoad from '../components/LazyLoad';

const CommentsSection = React.lazy(() => import('./CommentsSection/CommentsSection'));

interface PostProps {
  id: number,
  title: string,
  description: string
}

const styles = stylex.create({
  container: {
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column'
  }
});

export default function Post ({ id, title, description }: PostProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <h1>{title}</h1>
      <p>{description}</p>
      <LazyLoad>
        <CommentsSection postId={id}/>
      </LazyLoad>
    </div>
  );
}