import { ACTION_TYPES } from "../actions/actionTypes"

export const cartReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART_ASYNC:
            state = state.concat([action.payload]);
            return state
        case ACTION_TYPES.REMOVE_FROM_CART_ASYNC:
            state = state.filter((x) => {return x.id !== action.payload.id});
            return state
        default:
            return state;
    }
}