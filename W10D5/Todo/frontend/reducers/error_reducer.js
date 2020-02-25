import { RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions.js';

const initialState = [];

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      nextState = nextState.concat(action.errors);
      return nextState;
    case CLEAR_ERRORS:
      nextState = [];
      return nextState;
    default:
      return state;
  }
};


export default errorReducer;