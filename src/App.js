import React from 'react';
import { connect } from 'react-redux';
import ListTask from "./components/ListTask";
import AddTask from "./components/AddTask";
import { addTask, toggleDone, deleteTask } from "./js/actions";

const App = ({ tasks, addTask, toggleDone, deleteTask }) => {
  const handleAddTask = (description) => {
    addTask(description);
  };

  const handleToggleDone = (id) => {
    toggleDone(id);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  return (
    <div>
      <AddTask onAdd={handleAddTask} />
      <ListTask tasks={tasks} filter={'all'} onToggleDone={handleToggleDone} onDelete={handleDeleteTask} />
      <button onClick={() => setFilter('done')}>Filter done</button>
      <button onClick={() => setFilter('not')}>Filter not done</button>
      <button onClick={() => setFilter('all')}>Filter all</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  toggleDone,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

