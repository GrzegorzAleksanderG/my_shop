import { put, delay, takeEvery } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* cartAsync() {
    yield delay(2000);
    yield put({type: ACTION_TYPES.ADD_TO_CART_ASYNC});
}

export function* cartSaga() {
    yield takeEvery(ACTION_TYPES.ADD_TO_CART, cartAsync);
}