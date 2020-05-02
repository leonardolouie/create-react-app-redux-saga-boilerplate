// ./src/actions/index.js

import { ADD_TODO } from '../constant/index';
import { LOAD_TODO_LIST } from '../constant/index';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title,
    },
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}
