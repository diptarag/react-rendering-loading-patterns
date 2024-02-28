import moment from 'moment-timezone';

import * as stylex from '@stylexjs/stylex';
import { spaces, borders, fontSizes, colors } from '../../../base/tokens.stylex';

import type { Comment } from './types';

interface CommentsProps {
  data: Comment[]
}

const styles = stylex.create({
  container: {
    marginTop: `${spaces.spacingXL}`,
    display: 'flex',
    flexDirection: 'column',
    gap: `${spaces.spacingM}`
  },
  commentContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: `${borders.borderThin} solid ${colors.borderSubtle}`
  },
  title: {
    fontWeight: 'bold'
  },
  email: {
    fontSize: `${fontSizes.textSizeM}`
  },
  date: {
    fontSize: `${fontSizes.textSizeM}`,
    fontStyle: 'italic'
  }
});

function Comment ({ name, email, body, date }: Comment) {
  return (
    <div {...stylex.props(styles.commentContainer)}>
      <span {...stylex.props(styles.title)}>{name}</span>
      <span {...stylex.props(styles.email)}>{email}</span>
      {date && <span {...stylex.props(styles.date)}>{moment.tz(date, 'US/Pacific').format('DD MMM yy hA z')}</span>}
      <p>{body}</p>
    </div>
  );
}

export default function Comments ({ data }: CommentsProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {data.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}