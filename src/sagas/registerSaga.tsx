import { put, delay, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* registerAsync() {
    yield delay(1000);
    yield put({type: ACTION_TYPES.CREATE_NEW_USER_ASYNC});
}

export function* registerSaga() {
    yield takeLatest(ACTION_TYPES.CREATE_NEW_USER, registerAsync);
}