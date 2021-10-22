import { put, delay, takeEvery } from 'redux-saga/effects';
import { ACTION_TYPES } from "../actions/actionTypes";

function* setConfiguratorAsync() {
    yield delay(2000);
    yield put({type: ACTION_TYPES.SET_CONFIGURATOR_ASYNC});
}

export function* setConfiguratorSaga() {
    yield takeEvery(ACTION_TYPES.SET_CONFIGURATOR, setConfiguratorAsync);
}

function* clearConfiguratorAsync() {
    yield delay(2000);
    yield put({type: ACTION_TYPES.CLEAR_CONFIGURATOR_ASYNC});
}

export function* clearConfiguratorSaga() {
    yield takeEvery(ACTION_TYPES.CLEAR_CONFIGURATOR, clearConfiguratorAsync);
}