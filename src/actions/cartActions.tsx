import { GetDataReducerType } from "../reducers/stateReducerTypes";
import { ACTION_TYPES } from "./actionTypes";

export const addToCartAction = (payload:GetDataReducerType) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART_ASYNC,
        payload
    }
}

export const removeFromCartAction = (payload:GetDataReducerType) => {
    return {
        type: ACTION_TYPES.REMOVE_FROM_CART_ASYNC,
        payload
    }
}