

export const myThunk = (store) => (dispatch) => (action) => {
  if(typeof action === "function"){
    return action(store.dispatch);
  }else{
    return next(action);
  }
};