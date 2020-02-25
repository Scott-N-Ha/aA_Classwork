export const fetchTodos = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/todo_models'
    })
  );
};

export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todo_models',
    data: {todo:todo}
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/todo_models/${todo.id}`,
    data: {todo:todo}
  });
};

export const deleteTodo = (todo) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/todo_models/${todo.id}`
  });
};