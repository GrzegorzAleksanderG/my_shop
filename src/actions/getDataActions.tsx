import { ACTION_TYPES } from "./actionTypes";

export const getArticlesAction = (payload:any) => {
    return {
        type: ACTION_TYPES.GET_ARTICLES_ASYNC,
        payload
    }
}