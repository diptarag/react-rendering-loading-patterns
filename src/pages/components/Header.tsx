import * as stylex from '@stylexjs/stylex';
import { NavLink } from 'react-router-dom';

import { colors, sizes, borders, fontSizes, spaces, animation } from '../../base/tokens.stylex';

const styles = stylex.create({
  navContainer: {
    width: '100vw',
    height: `${sizes.elementHeightL}`,
    borderBottomStyle: 'solid',
    borderBottomWidth: `${borders.borderThin}`,
    borderBottomColor: `${colors.borderSubtle}`,
    backgroundColor: `${colors.backgroundSubtle}`,
    boxShadow: `${colors.borderSubtle} 0 0.1rem 1.5rem -4px`
  },
  headerElementsContainer: {
    display: 'flex',
    listStyle: 'none',
    height: '100%',
    fontSize: `${fontSizes.textSizeXXL}`,
    padding: 0,
    margin: 0
  },
  headerNav: {
    display: 'inline-block',
    height: `${sizes.elementHeightL}`,
    lineHeight: `${sizes.elementHeightL}`,
    padding: `0 ${spaces.spacingL}`,
    transition: `all ${animation.transitionDurationDefault}`,
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
  name: 'home',
  text: 'Home',
  route: '/',
  thumbnail: ''
}, {
  name: 'albums',
  text: 'Albums',
  route: '/albums',
}, {
  name: 'posts',
  text: 'Posts',
  route: '/posts',
}, {
  name: 'todos',
  text: 'To DOs',
  route: '/todos'
}]

export default function Header () {
  return (
    <nav {...stylex.props(styles.navContainer)}>
      <ul {...stylex.props(styles.headerElementsContainer)}>
        {routes.map(({ name, text, route }) => {
          return (
            <li key={name}>
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