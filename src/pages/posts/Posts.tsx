import { useAsyncValue, useMatches } from 'react-router-dom';

import SidebarLayout from '../components/SidebarLayout';
import Post from './Post';

import type { Post as PostType, Comment } from './types';
import LazyDataLoad from '../components/LazyDataLoad';

interface PostsDetailsData {
  data: Array<object>
}

function Posts () {
  const postsDetails = useAsyncValue() as Array<PostsDetailsData>;
  const matches = useMatches();

  if (!postsDetails || !Array.isArray(postsDetails)) {
    return null;
  }

  const data = postsDetails[0].data as PostType[];
  const postId = matches.find(match => match.id === 'posts')?.params.postId;
  const post = data.find(({ id }) => id.toString() === postId);

  return (
    <SidebarLayout data={data.map(({ id, title }) => {
      return {
        key: id.toString(),
        label: title,
        route: `/posts/${id}`
      }
    })}>
      {
        post ? <Post title={post.title} description={post.body} id={post.id} comments={postsDetails[1].data as Comment[]} /> : <h1>Select a post to load content and comments</h1>
      }
    </SidebarLayout>
  );
}

export default function LazyPosts () {
  return (
    <LazyDataLoad lazyResolveField='postsDetails'>
      <Posts />
    </LazyDataLoad>
  );
}