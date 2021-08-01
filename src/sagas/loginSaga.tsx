import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* loginAsync() {
    yield delay(2000);
    yield put({type: ACTION_TYPES.LOG_USER_ASYNC});
}

export function* loginSaga() {
    yield takeLatest(ACTION_TYPES.LOG_USER, loginAsync);
}