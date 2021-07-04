import { ACTION_TYPES } from "../actions/actionTypes"

export const getDataReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ARTICLES_ASYNC:
            return { articles:action.payload, ...state }
        default:
            return state;
    }
}