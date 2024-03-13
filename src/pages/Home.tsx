import * as stylex from '@stylexjs/stylex';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';

import Text from '../base/components/Text';
import Card from '../base/components/Card';
import Loader from './components/Loader';

import AlbumIcon from '../assets/album.svg';
import PostIcon from '../assets/post.svg';
import ToDoIcon from '../assets/todo.svg';

interface UserData {
  name: string
}

interface LoaderData {
  userData: UserData
}

const styles = stylex.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25vh'
  },
  cardContainer: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  smallHeading: {
    margin: 0
  }
});

const routes = [{
  route: 'albums',
  text: 'Albums',
  thumbnail: AlbumIcon
}, {
  route: 'posts',
  text: 'Posts',
  thumbnail: PostIcon
}, {
  route: 'todos',
  text: 'To DOs',
  thumbnail: ToDoIcon
}];

export default function Home() {
  const { userData: data } = useLoaderData() as LoaderData;
  const { state } = useNavigation();

  if (state === 'loading' || !data) {
    return <Loader />;
  }

  return (
    <div {...stylex.props(styles.homeContainer)}>
      <h1>Welcome, {data.name}</h1>
      <div {...stylex.props(styles.cardContainer)}>
        {routes.map(({ route, text, thumbnail }) => {
          return (
            <Link to={route} key={text}>
              <Card>
                <img src={thumbnail} alt={text} />
                <Text size='large'>{text}</Text>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

