import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {api} from '../../network/api';
import {getUsersFailure, getUsersStart, getUsersSuccess} from './userSlice';

function* fetchUser() {
  yield put(getUsersStart());

  try {
    const users = yield call(api.fetchUser);
    console.log(users.data);

    yield delay(2000);
    yield put(getUsersSuccess(users.data));
  } catch (e) {
    console.log(e);
    yield put(getUsersFailure(e));
  }
}

export const getUser = {type: 'USER_FETCH_REQUESTED'};

function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
