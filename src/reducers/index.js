/***
 *
 * This file has two goals. The first one is to define the initialState state of your app
 * (which is an empty toDoList). The second one is to define what the toDoApp will do when it receives
 * an ADD_TODO action (which is to include the new to-do item to the toDoList).
 */

/**
 * This is defined at actions/index.js
 * This is just variable that holds actions name
 */
import { ADD_TODO } from '../constant/index';

const initialState = {
  toDoList: [],
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ];
      return {
        ...state,
        toDoList: newToDoList,
      };
    default:
      return state;
  }
}
