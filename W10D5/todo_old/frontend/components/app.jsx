import React from 'react';
import TodoListContainer from './todos/todo_list_container.jsx';

const App = (props) => {
  return (
    <div id='app'>
      <h1>APP is working Yo!!! </h1>
      <TodoListContainer />
    </div>
  )
}

export default App;