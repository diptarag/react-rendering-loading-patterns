import { useState, useEffect } from 'react';
import * as stylex from '@stylexjs/stylex';
import { spaces } from '../base/tokens.stylex';

import { API_ENDPOINT_BASE_PATH, USER_ID } from '../global';
import useFetch from '../base/hooks/useFetch';

import Loader from './components/Loader';
import Checkbox from '../base/components/Checkbox';

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const styles = stylex.create({
  container: {
    marginLeft: `${spaces.spacingXXL}`
  },
  checkBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: `${spaces.spacingS}`
  }
});

const TODO_FETCH_ENDPOINT = `${API_ENDPOINT_BASE_PATH}/users/${USER_ID}/todos`;

export default function ToDos () {
  const { data, fetchStatus } = useFetch<ToDo[]>(TODO_FETCH_ENDPOINT);
  const [completed, setCompleted] = useState<ToDo[]>([]);
  const [pending, setPending] = useState<ToDo[]>([]);

  useEffect(() => {
    const completedTasks: ToDo[] = [],
      pendingTasks: ToDo[] = [];

    data?.forEach((todo) => todo.completed ? completedTasks.push(todo) : pendingTasks.push(todo));
    setCompleted(completedTasks);
    setPending(pendingTasks);
  }, [data]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    console.log(id, checked);
  };

  if (fetchStatus === 'pending' || !data) {
    return <Loader />;
  }


  return (
    <div {...stylex.props(styles.container)}>
      <h2>Pending ToDos</h2>
      <div {...stylex.props(styles.checkBoxContainer)}>
        {
          pending?.map(({ id, title }) => <Checkbox key={id} id={id} label={title} name={id} onChange={handleCheckboxChange} />)
        }
      </div>
      <h2>Completed</h2>
      <div {...stylex.props(styles.checkBoxContainer)}>
        {
          completed?.map(({ id, title }) => <Checkbox id={id} label={title} name={id} checked onChange={handleCheckboxChange} />)
        }
      </div>
    </div>
  );
}