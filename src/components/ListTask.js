import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const setIsDoneFilter = useSelector(state => state.setIsDoneFilter);

  const filteredTasks = tasks.filter(task => setIsDoneFilter === 'all' || task.isDone === (setIsDoneFilter === 'done'));

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={setIsDoneFilter === 'all'}
            onChange={() => setIsDoneFilter('all')}
          />
          All Tasks
        </label>
        <label>
          <input
            type="radio"
            value="done"
            checked={setIsDoneFilter === 'done'}
            onChange={() => setIsDoneFilter('done')}
          />
          Done Tasks Only
        </label>
        <label>
          <input
            type="radio"
            value="not-done"
            checked={setIsDoneFilter === 'not-done'}
            onChange={() => setIsDoneFilter('not-done')}
          />
          Not Done Tasks Only
        </label>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(task => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;