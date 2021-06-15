import { ACTION_TYPES } from "./actionTypes";

export const logUserAction = (payload:any) => {
    return {
        type: ACTION_TYPES.LOG_USER,
        payload
    }
}

export const logoutUserAction = (payload:any) => {
    return {
        type: ACTION_TYPES.LOGOUT_USER,
        payload
    }
}