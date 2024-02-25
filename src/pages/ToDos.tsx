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
  const [todoList, setToDoList] = useState<ToDo[]>([]);
  const [completed, setCompleted] = useState<ToDo[]>([]);
  const [pending, setPending] = useState<ToDo[]>([]);

  useEffect(() => {
    if (data) {
      setToDoList(data);
    }
  }, [data]);

  useEffect(() => {
    const completedTasks: ToDo[] = [],
      pendingTasks: ToDo[] = [];

    todoList?.forEach((todo) => todo.completed ? completedTasks.push(todo) : pendingTasks.push(todo));
    setCompleted(completedTasks);
    setPending(pendingTasks);
  }, [todoList]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const todoListClone = todoList.map(todo => ({ ...todo }));
    const changedItem = todoListClone.find(todo => id === todo.id.toString());

    if (changedItem) {
      changedItem.completed = checked;
      setToDoList(todoListClone);
    }
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
          completed?.map(({ id, title }) => <Checkbox key={id} id={id} label={title} name={id} checked onChange={handleCheckboxChange} />)
        }
      </div>
    </div>
  );
}