import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;