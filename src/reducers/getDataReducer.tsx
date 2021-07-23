import { ACTION_TYPES, GetArticlesActionType } from "../actions/actionTypes"
import { GetDataReducerType } from './stateReducerTypes';

export const getDataReducer = (state: GetDataReducerType[] = [], action: GetArticlesActionType) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ARTICLES_ASYNC:
            return { articles: action.payload, ...state }
        default:
            return state;
    }
}