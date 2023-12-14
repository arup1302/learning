// middleware.js
import thunk from 'redux-thunk';

export const setupMiddleware = store => {
  store.dispatch = addThunkSupport(store);
};

const addThunkSupport = store => {
  const next = store.dispatch;
  return action => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };
};

// Apply additional middleware if needed
// For example, apply thunk middleware
const middleware = [thunk];

export default middleware;
