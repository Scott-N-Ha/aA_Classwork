export const allTodos = (state) => {
  return Object.keys(state.todos).map( (todo_id) => {
    return state.todos[todo_id];
  });
};

export const allErrors = (state) => {
  return state.errors.join(', ');
};