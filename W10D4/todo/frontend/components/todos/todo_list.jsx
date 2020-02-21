import React from 'react';
import TodoForm from '../todo_list/todo_form.jsx';

const remove = (func, todo) => {
  return () => {
    func(todo);
  }
};

const flipStatus = (func, todo) => {
  // todo.done = !todo.done
  return () => {
    func(todo)
  }
};
{/* <button onClick={flipStatus(props.receiveTodo, todo)}>{buttonText}</button> */}
const TodoList = (props) => {
  const list = props.todos.map(todo => {
    let text = todo.done ? " Lam Xong Roi" : "Chua Xong";
    let buttonText = todo.done ? "Undo" : "Done";
    return (
      <li key={todo.id}>
        Title: {todo.title}<br/>
          Body: {todo.body}<br/>
        Done: {text} <button onClick={flipStatus(props.flipStatus, todo)}>{buttonText}</button><br/> 
          <button onClick={remove(props.removeTodo, todo)}>Delete</button><br/>
          <br/>
      </li>
    )
  })

  return (
    <div id='todo-list'>
      <TodoForm receiveTodo={props.receiveTodo} />
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default TodoList;