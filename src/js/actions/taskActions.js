// actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SHOW_DONE = 'SHOW_DONE';

let nextId = 1;

export function addTask(description) {
  return {
    type: ADD_TASK,
    payload: {
      id: nextId++,
      description,
      isDone: false,
    },
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
}

export function editTask(id, description) {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      description,
    },
  };
}

export function showDone(value) {
  return {
    type: SHOW_DONE,
    payload: {
      value,
    },
  };
}


