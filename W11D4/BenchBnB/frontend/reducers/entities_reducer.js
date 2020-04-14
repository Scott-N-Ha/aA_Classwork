import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import benchesReducer from './benches_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer
});

export default entitiesReducer;