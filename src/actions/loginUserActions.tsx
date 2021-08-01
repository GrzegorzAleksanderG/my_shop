import { LoginReducerType } from "../reducers/stateReducerTypes";
import { ACTION_TYPES } from "./actionTypes";

export const logUserAction = (payload: LoginReducerType) => {
    return {
        type: ACTION_TYPES.LOG_USER_ASYNC,
        payload
    }
}

export const logoutUserAction = (payload: LoginReducerType) => {
    return {
        type: ACTION_TYPES.LOGOUT_USER_ASYNC,
        payload
    }
}