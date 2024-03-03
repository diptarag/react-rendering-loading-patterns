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

  const sortDateAndSetComments = (unsortedComments: Comment[]) => {
    const commentDataWithDate = _.map(unsortedComments, comment => {
      return comment.date ? comment : { ...comment, date: getRandomDate(START_DATE, END_DATE) }
    })
    commentDataWithDate.sort((comment1, comment2) => moment(comment2.date).diff(comment1.date));
    setComments(commentDataWithDate.sort());
  };

  const handleCommentsAdd = (title: string, comment: string) => {
    const updatedComments = comments.slice(0);
    updatedComments.push({
      name: title,
      body: comment,
      email: 'me',
      date: new Date(),
      postId,
      id: comments.length + 1
    });
    sortDateAndSetComments(updatedComments);
  };

  useEffect(() => {
    if (data) {
      sortDateAndSetComments(data);
    }
  }, [data]);

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }

  return (
    <div>
      <h4>Comments</h4>
      <AddComment handleCommentsAdd={handleCommentsAdd} />
      <Comments data={comments} />
    </div>
  );
}