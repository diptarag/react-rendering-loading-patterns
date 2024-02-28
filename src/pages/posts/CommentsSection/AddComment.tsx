import * as Form from '@radix-ui/react-form';
import * as stylex from '@stylexjs/stylex';
import { animation, borders, colors, fontSizes, sizes, spaces } from '../../../base/tokens.stylex';

const styles = stylex.create({
  container: {
    width: '100%',
    maxWidth: '40rem',
    margin: 'auto'
  },
  formField: {
    display: 'grid',
    marginBottom: `${spaces.spacingM}`
  },
  formFieldChildrenContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  formInput: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: `${borders.borderRadiusL}`,
    backgroundColor: {
      default: `${colors.backgroundElement}`,
      '::selection': `${colors.backgroundElementActive}`
    },
    color: `${colors.fontHighContrast}`,
    transition: `all ${animation.transitionDurationM}`,
    boxShadow: {
      default: `0 0 0 1px ${colors.borderElement}`,
      ':hover': `0 0 0 1px ${colors.borderHover}`,
      ':focus': `0 0 0 2px ${colors.borderHover}`
    }
  },
  formLabel: {
    fontWeight: '500',
    lineHeight: `${sizes.sizeM}`
  },
  formMessage: {
    fontSize: `${fontSizes.textSizeM}`,
    opacity: 0.8
  },
  textBox: {
    padding: `0 ${spaces.spacingS}`,
    height: `${sizes.elementHeight}`,
    lineHeight: 1
  },
  textArea: {
    resize: 'none',
    padding: `${spaces.spacingS}`
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: `${borders.borderRadiusL}`,
    padding: `0 ${spaces.spacingL}`,
    lineHeight: 1,
    fontWeight: '500',
    height: `${sizes.elementHeight}`,
    color: `${colors.fontLightBackground}`,
    width: '30%',
    minWidth: '10rem',
    backgroundColor: {
      default: `${colors.backgroundElementLight}`,
      ':hover': `${colors.backgroundElementLightHover}`
    },
    boxShadow: {
      default: `0 ${spaces.spacingXXS} ${spaces.spacingM} ${colors.borderElement}`,
      ':focus': `0 0 0 2px ${colors.borderHover}`
    }
  }
});

export default function AddComment () {
  return (
    <div {...stylex.props(styles.container)}>
    <Form.Root>
      <Form.Field name='title' {...stylex.props(styles.formField)}>
        <div {...stylex.props(styles.formFieldChildrenContainer)}>
          <Form.Label {...stylex.props(styles.formLabel)}>Title</Form.Label>
          <Form.Message {...stylex.props(styles.formMessage)} match='valueMissing'>Please enter a valid comment title</Form.Message>
        </div>
        <Form.Control asChild>
          <input {...stylex.props(styles.formInput, styles.textBox)} type='text' required />
        </Form.Control>
      </Form.Field>
      <Form.Field name='comment' {...stylex.props(styles.formField)}>
        <div {...stylex.props(styles.formFieldChildrenContainer)}>
          <Form.Label {...stylex.props(styles.formLabel)}>Comment</Form.Label>
          <Form.Message {...stylex.props(styles.formMessage)} match='valueMissing'>Please enter a valid comment</Form.Message>
        </div>
        <Form.Control asChild>
          <textarea {...stylex.props(styles.formInput, styles.textArea)} required />
        </Form.Control>
      </Form.Field>
      <div {...stylex.props(styles.submitContainer)}>
        <Form.Submit asChild>
            <button {...stylex.props(styles.button)}>
              Add Comment
            </button>
        </Form.Submit>
      </div>
    </Form.Root>
    </div>
  );
}