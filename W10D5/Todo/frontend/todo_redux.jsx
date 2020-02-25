import React from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducers/root_reducer.js';
import configureStore from './store/store.js';
import { receiveTodos, receiveTodo} from './actions/todo_actions.js';
import Root from './components/root.jsx';

import allTodos from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.rootReducer = rootReducer;
  window.allTodos = allTodos;

  ReactDom.render(
    <Root store={store}/>
    , root);
});