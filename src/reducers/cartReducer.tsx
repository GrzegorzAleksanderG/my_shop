import { ACTION_TYPES } from "../actions/actionTypes"
import { CartReducerType } from "./stateReducerTypes";

export const cartReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART_ASYNC:
            if (!state.some((x : CartReducerType) => { return x.id === action.payload.id })) {
                action.payload.count = 1;
                state = state.concat(action.payload);
            } else {
                state = state.map((x) => {
                    if (x.id === action.payload.id) {
                        x.count++;
                    }
                    return x;
                });
            }
            return state
        case ACTION_TYPES.REMOVE_FROM_CART_ASYNC:
            if (state.some((x) => { return x.id === action.payload.id && x.count > 1 })) {
                state = state.map((x) => {
                    if (x.id === action.payload.id) {
                        x.count--;
                    }
                    return x;
                });
            } else {
                state = state.filter((x) => { return x.id !== action.payload.id });
            }
            return state
        default:
            return state;
    }
}