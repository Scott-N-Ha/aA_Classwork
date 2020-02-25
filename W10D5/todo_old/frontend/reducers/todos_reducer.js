import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, FLIP_STATUS } from '../actions/todo_actions.js';

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

  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    case FLIP_STATUS:
      if (nextState[action.todo.id].done){
        nextState[action.todo.id].done = false;
      }else{
        nextState[action.todo.id].done = true;
      }
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;