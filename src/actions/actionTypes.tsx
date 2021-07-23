import { LoginReducerType, RegisterReducerType, CartReducerType, GetDataReducerType } from '../reducers/stateReducerTypes';

export enum ACTION_TYPES {
    CREATE_NEW_USER = "CREATE_NEW_USER",
    UPDATE_EXISTING_USER = "UPDATE_EXISTING_USER",
    DELETE_EXISTING_USER = "DELETE_EXISTING_USER",
    LOG_USER = "LOG_USER",
    LOGOUT_USER = "LOGOUT_USER",
    GET_ARTICLES = "GET_ARTICLES",
    GET_ARTICLES_ASYNC = "GET_ARTICLES_ASYNC",
    ADD_TO_CART_ASYNC = "ADD_TO_CART_ASYNC",
    REMOVE_FROM_CART_ASYNC = "REMOVE_FROM_CART_ASYNC",
    TEST_ASYNC = "TEST_ASYNC",
    TEST = "TEST"
}

export type NewUserActionType = {
    type : ACTION_TYPES;
    payload : RegisterReducerType
}

export type LogUserActionType = {
    type : ACTION_TYPES;
    payload : LoginReducerType;
}

export type LogoutUserActionType = {
    type : ACTION_TYPES;
    payload : LoginReducerType;
}

export type GetArticlesActionType = {
    type : ACTION_TYPES;
    payload : GetDataReducerType[];
}

export type AddToCartActionType = {
    type : ACTION_TYPES;
    payload : CartReducerType;
}