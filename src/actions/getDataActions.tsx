import { GetDataReducerType } from "../reducers/stateReducerTypes";
import { ACTION_TYPES } from "./actionTypes";

export const getArticlesAction = (payload: GetDataReducerType) => {
    return {
        type: ACTION_TYPES.GET_ARTICLES_ASYNC,
        payload
    }
}