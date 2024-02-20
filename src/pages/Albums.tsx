

// import { API_ENDPOINT_BASE_PATH, USER_ID } from '../global';
// import useFetch from '../base/hooks/useFetch';

// import Loader from './components/Loader';
import SidebarLayout from './components/SidebarLayout';

// interface Album {
//   userId: number,
//   id: number,
//   title: string
// }

export default function Albums () {
  // const { data, fetchStatus } = useFetch<Album>(`${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/albums`);


  // if (fetchStatus === 'pending' || !data) {
  //   return <Loader />;
  // }

  const data = [
    {
      key: '1',
      route: 'albums/1',
      label: 'foo'
    },
    {
      key: '2',
      route: 'albums/2',
      label: 'bar'
    }
  ];

  return (
    <SidebarLayout data={data}>
      <h1>Hello World</h1>
    </SidebarLayout>
  );
}