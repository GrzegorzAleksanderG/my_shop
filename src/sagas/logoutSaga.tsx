import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* logoutAsync() {
    yield delay(2000);
    yield put({type: ACTION_TYPES.LOGOUT_USER_ASYNC});
}

export function* logoutSaga() {
    yield takeLatest(ACTION_TYPES.LOGOUT_USER, logoutAsync);
}