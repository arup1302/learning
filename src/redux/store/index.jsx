import {createStore, combineReducers} from 'redux';
import {counterReducer} from '../reducers/countReducer';
const rootReducer = combineReducers({
  counterReducer,
});
export const store = createStore(rootReducer);
