import { Outlet } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';

import Header from './components/Header';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
});

export default function Layout () {
  return (
    <div {...stylex.props(styles.container)}>
      <Header />
      <Outlet />
    </div>
  );
}