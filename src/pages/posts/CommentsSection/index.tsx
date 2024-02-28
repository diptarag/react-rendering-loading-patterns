import { useState, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { API_ENDPOINT_BASE_PATH } from '../../../global';
import useFetch from '../../../base/hooks/useFetch';
import { getRandomDate } from '../../../base/utils/date';

import Loader from '../../components/Loader';

import AddComment from './AddComment';
import Comments from './Comments';

import type { Comment } from './types';

interface CommentsSectionProps {
  postId: number
}

const START_DATE = new Date('2000-01-01'),
  END_DATE = new Date();

export default function CommentsSection ({ postId }: CommentsSectionProps) {
  const { data, fetchStatus } = useFetch<Comment[]>(`${API_ENDPOINT_BASE_PATH}/posts/${postId}/comments`);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (data) {
      const commentDataWithDate = _.map(data, comment => {
        return comment.date ? comment : { ...comment, date: getRandomDate(START_DATE, END_DATE) }
      })
      commentDataWithDate.sort((comment1, comment2) => moment(comment2.date).diff(comment1.date));
      setComments(commentDataWithDate.sort());
    }
  }, [data])

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }

  return (
    <div>
      <h4>Comments</h4>
      <AddComment />
      <Comments data={comments} />
    </div>
  );
}