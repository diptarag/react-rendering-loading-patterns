import * as stylex from '@stylexjs/stylex';
import { NavLink } from 'react-router-dom';

import { colors } from '../../base/tokens.stylex';

const styles = stylex.create({
  navContainer: {
    width: '100vw',
    height: '2.5rem',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.1rem',
    borderBottomColor: `${colors.borderSubtle}`,
    backgroundColor: `${colors.backgroundSubtle}`,
    boxShadow: `${colors.borderSubtle} 0 0.1rem 1.5rem -4px`
  },
  headerElementsContainer: {
    display: 'flex',
    listStyle: 'none',
    height: '100%',
    fontSize: '1.3rem',
    padding: 0,
    margin: 0
  },
  headerNav: {
    display: 'inline-block',
    height: '2.5rem',
    lineHeight: '2.5rem',
    padding: '0 1rem',
    transition: 'all 300ms',
    backgroundColor: {
      default: null,
      ':hover': `${colors.backgroundElementHover}`
    }
  },
  activeNav: {
    backgroundColor: `${colors.backgroundElementActive}`
  }
});

const routes = [{
  text: 'Home',
  route: '/',
  thumbnail: ''
}, {
  text: 'Albums',
  route: '/albums',
}, {
  text: 'Posts',
  route: '/posts',
}, {
  text: 'To DOs',
  route: '/todos'
}]

export default function Header () {
  return (
    <nav {...stylex.props(styles.navContainer)}>
      <ul {...stylex.props(styles.headerElementsContainer)}>
        {routes.map(({ text, route }) => {
          return (
            <li>
              <NavLink to={route} className={({ isActive }) => {
                const stylexProps = stylex.props(styles.headerNav, isActive && styles.activeNav);
                return stylexProps.className;
              }}>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}