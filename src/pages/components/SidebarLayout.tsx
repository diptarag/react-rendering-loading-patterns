import React from 'react';
import { NavLink } from 'react-router-dom';

import * as stylex from '@stylexjs/stylex';
import { colors, spaces, fontSizes, borders } from '../../base/tokens.stylex';

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
    flexDirection: 'row',
    flexGrow: '1'
  },
  sidebar: {
    borderRight: `${borders.borderThin} solid ${colors.borderElement}`,
    margin: 0,
    padding: 0,
    width: '20vw',
    listStyle: 'none'
  },
  sidebarListItem: {
    padding: `${spaces.spacingL}`,
    borderBottom: `${borders.borderThin} solid ${colors.borderSubtle}`,
    fontSize: `${fontSizes.textSizeL}`,
    overflow: 'auto',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    backgroundColor: {
      default: null,
      ':hover': `${colors.backgroundElementHover}`
    },
    cursor: 'pointer'
  },
  childContainer: {
    flexGrow: '1',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: `${spaces.spacingXXL}`,
    paddingLeft: `${spaces.spacingXXXL}`,
    paddingRight: `${spaces.spacingXL}`,
    height: '90vh',
    overflowY: 'scroll'
  },
  activeNav: {
    backgroundColor: `${colors.backgroundElementActive}`
  }
});

export default function SidebarLayout ({ data, children }: SidebarLayoutProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <ul {...stylex.props(styles.sidebar)}>
      {
          data.map(({ key, route, label }) => <li key={key}>
            <NavLink to={route}>
              {({ isActive }) => <div {...stylex.props(styles.sidebarListItem, isActive && styles.activeNav)}>{label}</div>}
            </NavLink>
          </li>)
        }
      </ul>
      <div {...stylex.props(styles.childContainer)}>
        {children}
      </div>
    </div>
  );
}