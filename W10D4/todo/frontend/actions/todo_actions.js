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
  }
};



export const FLIP_STATUS = "FLIP_STATUS";

export const flipStatus = (todo) => {
  return {
    type: FLIP_STATUS,
    todo
  }
};