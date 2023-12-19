// sagas/index.js
import {all} from 'redux-saga/effects';
import {watchFetchUsers} from './usersSaga';

export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    // Add other sagas here if any
  ]);
}
