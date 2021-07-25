import { ACTION_TYPES, AddToCartActionType } from '../actions/actionTypes';
import { CartReducerType } from "./stateReducerTypes";

export const cartReducer = (state: CartReducerType[] = [], action: AddToCartActionType) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART_ASYNC:
            if (!state.some((x : CartReducerType) => { return x.id === action.payload.id })) {
                action.payload.count = 1;
                return state.concat(action.payload);
            } else {
                return state.map((x) => {
                    if (x.id === action.payload.id) {
                        x.count++;
                    }
                    return x;
                });
            }
        case ACTION_TYPES.REMOVE_FROM_CART_ASYNC:
            if (state.some((x : CartReducerType) => { return x.id === action.payload.id && x.count > 1 })) {
                return state.map((x) => {
                    if (x.id === action.payload.id) {
                        x.count--;
                    }
                    return x;
                });
            } else {
                return state.filter((x) => { return x.id !== action.payload.id });
            }
        default:
            return state;
    }
}