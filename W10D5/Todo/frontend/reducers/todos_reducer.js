import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  let index;
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      Object.values(nextState).forEach((todo, idx) => {
        if (todo.id === action.todo.id) index = idx;
      });
      delete nextState[index];
      return nextState;
    case UPDATE_TODO:
      Object.values(nextState).forEach((todo, idx) => {
        if(todo.id === action.todo.id) index = idx;
      });
      nextState[index] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;