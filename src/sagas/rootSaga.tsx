import { all, call, spawn } from "redux-saga/effects";
import { cartSaga } from "./cartSaga";
import { getDataSaga } from "./getDataSaga";
import { loginSaga } from "./loginSaga";
import { logoutSaga } from "./logoutSaga";
import { registerSaga } from "./registerSaga";

export function* rootSaga() {
    const sagas = [
        cartSaga,
        loginSaga,
        logoutSaga,
        getDataSaga,
        registerSaga
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