// ./src/actions/index.js

import { ADD_TODO } from '../constant/index';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title,
    },
  };
}
