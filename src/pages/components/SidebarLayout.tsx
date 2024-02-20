import React from 'react';
import { Link } from 'react-router-dom';

import * as stylex from '@stylexjs/stylex';

interface Sidebar {
  key: string,
  route: string,
  label: string
}

interface SidebarLayoutProps {
  data: Sidebar[],
  children: React.ReactNode
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default function SidebarLayout ({ data, children }: SidebarLayoutProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <ul>
        {
          data.map(({ key, route, label }) => <li key={key}>
            <Link to={route}>{label}</Link>
          </li>)
        }
      </ul>
      <div>
        {children}
      </div>
    </div>
  );
}