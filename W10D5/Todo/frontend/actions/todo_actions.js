import * as APIUtils from '../utils/todo_api_util.js';
import { receiveErrors } from './error_actions.js';

export const RECEIVE_TODOS = "RECEIVE_TODOS";


export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    todo
  };
};

// this is combination of ajax call and regular action make thunk action 

export const fetchAllTodos = () => (dispatch) => {
  return APIUtils.fetchTodos()
    .then(
      todos => dispatch(receiveTodos(todos)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const createNewTodo = (todo) => (dispatch) => {
  return APIUtils.createTodo(todo)
  .then(
    todo => dispatch(receiveTodo(todo)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateThunkTodo = (todo) => (dispatch) => {
  return APIUtils.updateTodo(todo).then(
    todo => dispatch(updateTodo(todo)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteThunkTodo = (todo) => (dispatch) => {
  return APIUtils.deleteTodo(todo).then(
    todo => dispatch(removeTodo(todo)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};