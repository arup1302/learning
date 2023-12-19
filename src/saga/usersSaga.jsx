// sagas/usersSaga.js
import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {fetchUsersFailure, fetchUsersSuccess} from '../redux/slice/usersSlice';

function* fetchUsersSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );
    const users = response.data;
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest('users/fetchUsersRequest', fetchUsersSaga);
}
