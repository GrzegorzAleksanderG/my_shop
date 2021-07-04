import { takeLatest, put, delay } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* getArticlesAsync() {
    yield delay(4000);
    yield put({type: ACTION_TYPES.GET_ARTICLES_ASYNC});
}

export function* getArticlesSaga() {
    yield takeLatest(ACTION_TYPES.GET_ARTICLES, getArticlesAsync);
}