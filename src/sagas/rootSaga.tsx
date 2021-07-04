import { all, call, spawn } from "redux-saga/effects";
import { getArticlesSaga } from "./getArticlesSaga";
import { testSaga } from "./testSaga";

export function* rootSaga() {
    const sagas = [
        testSaga,
        getArticlesSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}