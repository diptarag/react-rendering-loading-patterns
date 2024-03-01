import * as stylex from '@stylexjs/stylex';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { colors, borders, sizes, spaces, animation } from '../tokens.stylex';

interface CheckboxProps {
  id: string | number,
  name: string | number,
  label: string,
  checked?: boolean,
  onChange: (id: string, checked: boolean) => void
}

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  checkBoxRoot: {
    borderStyle: 'unset',
    backgroundColor: {
      default: `${colors.backgroundElementLight}`,
      ':hover': `${colors.backgroundElementLightHover}`
    },
    width: `${sizes.elementHeightS}`,
    height: `${sizes.elementHeightS}`,
    borderRadius: `${borders.borderRadiusL}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: {
      default: `0 ${borders.borderRadiusDefault} ${spaces.spacingS} ${colors.borderSubtle}`,
      ':focus': `0 0 0 ${borders.borderRadiusDefault} black`
    },
    transition: `all ${animation.transitionDurationDefault}`
  },
  indicator: {
    color: `${colors.elementColor}`
  },
  label: {
    paddingLeft: `${spaces.spacingL}`,
    lineHeight: 1
  }
});

export default function CheckboxComponent ({ id, name, label, checked, onChange }: CheckboxProps) {
  const sanitizedId = id.toString();
  return (
    <div {...stylex.props(styles.container)}>
      <Checkbox.Root id={sanitizedId} defaultChecked={checked} {...stylex.props(styles.checkBoxRoot)} onCheckedChange={(checked) => onChange(sanitizedId, !!checked)}>
        <Checkbox.Indicator {...stylex.props(styles.indicator)}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={name.toString()} {...stylex.props(styles.label)}>{label}</label>
    </div>
  );
}