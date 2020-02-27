import { signin, signout, signup } from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

const logoutCurrentUser = () => {
  type: LOGOUT_CURRENT_USER
}

const receiveErrors = (errors) => {
  type: RECEIVE_ERRORS,
  errors
}

export const logout = () => dispatch => (
  logout().then( user => dispatch(logoutCurrentUser()))
);

export const login = (user) => dispatch => (
  signin.(user)
)

// export const fetchTodos = () => dispatch => (
//   TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
// );

// export const fetchTodo = id => dispatch => (
//   TodoAPIUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
// );