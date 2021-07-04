import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* testSagaAsync() {
    yield delay(4000);
    yield put({type: ACTION_TYPES.TEST_ASYNC, value: 1});
}

export function* testSaga() {
    yield takeLatest(ACTION_TYPES.TEST, testSagaAsync);
}