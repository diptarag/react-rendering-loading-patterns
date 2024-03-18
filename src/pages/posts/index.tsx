import { useParams } from 'react-router-dom';

import { API_ENDPOINT_BASE_PATH, USER_ID } from '../../global';
import useFetch from '../../base/hooks/useFetch';

import Loader from '../components/Loader';
import SidebarLayout from '../components/SidebarLayout';
import Post from './Post';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const API_ENDPOINT_POSTS = `${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/posts`;

export default function Posts () {
  const { data, fetchStatus } = useFetch<Post[]>(API_ENDPOINT_POSTS);
  const params = useParams();

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }

  const postId = params.postId;
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