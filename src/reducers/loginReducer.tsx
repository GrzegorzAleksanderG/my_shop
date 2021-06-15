import { ACTION_TYPES } from "../actions/actionTypes"

export const loginReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_USER:
            return { ...state }
        case ACTION_TYPES.LOGOUT_USER:
            return { ...state }
        default:
            return state;
    }
}