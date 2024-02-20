import { ReactNode } from "react"
import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens.stylex';

interface CardProps {
  children: ReactNode
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: '0.1rem',
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
    borderRadius: '0.5rem',
    padding: '0.5rem',
    paddingTop: '0',
    transition: 'all 300ms'
  }
});

export default function Card ({ children }: CardProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {children}
    </div>
  );
}