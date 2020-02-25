import React from 'react';
import TodoForm from '../todo_list/todo_form.jsx';

const remove = (func, todo) => {
  return () => {
    func(todo);
  };
};

const flipStatus = (func, todo) => {
  return () => {
    todo.done = !todo.done;
    func(todo);
  };
};


{/* <button onClick={flipStatus(props.receiveTodo, todo)}>{buttonText}</button> */}
export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: true
    };
  }

  componentDidUpdate(){
    
  }

  componentDidMount(){
    this.props.fetchAllTodos();
  }

  render(){
    const list = this.props.todos.map(todo => {
      let text = todo.done ? " Lam Xong Roi" : "Chua Xong";
      let buttonText = todo.done ? "Undo" : "Done";
      return (
        <li key={todo.id}>
          Title: {todo.title}<br />
          Body: {todo.body}<br />
          Done: {text} <button onClick={flipStatus(this.props.updateTodo, todo)}>{buttonText}</button><br />
          <button onClick={remove(this.props.removeTodo, todo)}>Delete</button><br />
          <br />
        </li>
      )
    })

    return (
      <div id='todo-list'>
        <div id='form-errors'>{this.props.errors}</div>
        <TodoForm createNewTodo={this.props.createNewTodo} />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
} 

