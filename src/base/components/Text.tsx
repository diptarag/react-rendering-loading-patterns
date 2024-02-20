import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface TextProps {
  size: 'large',
  children: React.ReactNode
}

const styles = stylex.create({
  large: {
    fontWeight: '700',
    fontSize: '1.5rem'
  }
});

export default function Text ({ size, children }: TextProps) {
  return <span {...stylex.props(styles[size])}>{children}</span>
}