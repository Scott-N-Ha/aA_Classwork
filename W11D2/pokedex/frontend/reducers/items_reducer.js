import { RECEIVE_ITEMS } from '../actions/pokemon_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return Object.assign(nextState, action.items);
    default:
      return state;
  }
};