import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos, allErrors} from '../../reducers/selectors.js';
import * as TodoActions from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: allErrors(state)
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(TodoActions.deleteThunkTodo(todo)),
  flipStatus: (todo) => dispatch(TodoActions.flipStatus(todo)),
  fetchAllTodos: () => dispatch(TodoActions.fetchAllTodos()),
  createNewTodo: (todo) => dispatch(TodoActions.createNewTodo(todo)),
  updateTodo: (todo) => dispatch(TodoActions.updateThunkTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);