import { ACTION_TYPES } from "../actions/actionTypes"

export const testReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.TEST_ASYNC:
            return { ...state }
        case ACTION_TYPES.TEST:
            return { ...state }
        default:
            return state;
    }
}