import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
// import myThunk from '../middleware/thunk.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { applyMiddleware} from 'redux';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;