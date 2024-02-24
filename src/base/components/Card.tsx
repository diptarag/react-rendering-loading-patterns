import { ReactNode } from "react"
import * as stylex from '@stylexjs/stylex';
import { colors, borders, spaces, animation } from '../tokens.stylex';

interface CardProps {
  width?: string,
  children: ReactNode
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: `${borders.borderThin}`,
    borderStyle: 'solid',
    borderColor: {
      default: `${colors.borderSubtle}`,
      ':hover': `${colors.borderHover}`
    },
    backgroundColor: {
      default: `${colors.backgroundElement}`,
      ':hover': `${colors.backgroundElementHover}`
    },
    cursor: {
      default: 'default',
      ':hover': 'pointer'
    },
    borderRadius: `${spaces.spacingS}`,
    padding: `${spaces.spacingS}`,
    paddingTop: '0',
    transition: `all ${animation.transitionDurationDefault}`,
    width: '100%'
  },
  fixedWidthContainer: (width: string) => ({
    width
  })
});

export default function Card ({ width = '', children }: CardProps) {
  return (
    <div {...stylex.props(styles.container, styles.fixedWidthContainer(width))}>
      {children}
    </div>
  );
}