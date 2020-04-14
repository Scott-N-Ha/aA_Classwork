import { RECEIVE_BENCHES } from '../actions/bench_actions.js';

const initialState = {

};

const benchesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign(nextState, action.benches);
    default:
      return state;
  }
};

export default benchesReducer;