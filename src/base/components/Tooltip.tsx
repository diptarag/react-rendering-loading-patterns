import { ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as stylex from '@stylexjs/stylex';
import { borders, colors, spaces } from '../tokens.stylex';

interface TooltipProviderProps {
  children: ReactNode,
  text: string
}

const styles = stylex.create({
  content: {
    backgroundColor: `${colors.backgroundElementLight}`,
    color: `${colors.fontLightBackground}`,
    padding: `${spaces.spacingS}`,
    lineHeight: 1,
    borderRadius: `${borders.borderRadiusL}`
  },
  arrow: {
    fill: `${colors.backgroundElementLight}`
  }
});

export default function TooltipProvider ({ children, text }: TooltipProviderProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content {...stylex.props(styles.content)}>
            {text}
            <Tooltip.Arrow {...stylex.props(styles.arrow)} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}