import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* getDataAsync() {
    yield delay(4000);
    yield put({type: ACTION_TYPES.GET_ARTICLES_ASYNC});
}

export function* getDataSaga() {
    yield takeLatest(ACTION_TYPES.GET_ARTICLES, getDataAsync);
}