import { LoginReducerType, RegisterReducerType, CartReducerType, GetDataReducerType } from '../reducers/stateReducerTypes';

export enum ACTION_TYPES {
    CREATE_NEW_USER = "CREATE_NEW_USER",
    CREATE_NEW_USER_ASYNC = "CREATE_NEW_USER_ASYNC",
    UPDATE_EXISTING_USER = "UPDATE_EXISTING_USER",
    UPDATE_EXISTING_USER_ASYNC = "UPDATE_EXISTING_USER_ASYNC",
    DELETE_EXISTING_USER = "DELETE_EXISTING_USER",
    DELETE_EXISTING_USER_ASYNC = "DELETE_EXISTING_USER_ASYNC",
    LOG_USER = "LOG_USER",
    LOG_USER_ASYNC = "LOG_USER_ASYNC",
    LOGOUT_USER = "LOGOUT_USER",
    LOGOUT_USER_ASYNC = "LOGOUT_USER_ASYNC",
    GET_ARTICLES = "GET_ARTICLES",
    GET_ARTICLES_ASYNC = "GET_ARTICLES_ASYNC",
    ADD_TO_CART = "ADD_TO_CART",
    ADD_TO_CART_ASYNC = "ADD_TO_CART_ASYNC",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    REMOVE_FROM_CART_ASYNC = "REMOVE_FROM_CART_ASYNC"
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