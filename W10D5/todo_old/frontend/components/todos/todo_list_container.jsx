import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { receiveTodo, removeTodo, flipStatus } from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  flipStatus: (todo) => dispatch(flipStatus(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);