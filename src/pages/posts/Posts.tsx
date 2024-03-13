import { useLoaderData, useMatches, useNavigation } from 'react-router-dom';

import Loader from '../components/Loader';
import SidebarLayout from '../components/SidebarLayout';
import Post from './Post';

import type { Post as PostType } from './types';
interface LoaderData {
  posts: PostType[]
}

export default function Posts () {
  const { posts: data } = useLoaderData() as LoaderData;
  const { state } = useNavigation();
  const matches = useMatches();

  if (state === 'loading' || !data) {
    return <Loader />;
  }

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
        post ? <Post title={post.title} description={post.body} id={post.id} /> : <h1>Select a post to load content and comments</h1>
      }
    </SidebarLayout>
  );
}