import { ACTION_TYPES, ConfiguratorActionType } from "../actions/actionTypes"
import { GetDataReducerType } from './stateReducerTypes';

export const configuratorReducer = (state: GetDataReducerType[] = [], action: ConfiguratorActionType) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CONFIGURATOR_ASYNC:
            if (state.some((x) => { return x.category === action.payload.category })) {
                return state.map((x) => { return x.category === action.payload.category ? x : action.payload })
            } else {
                return [...state, action.payload];
            }
        case ACTION_TYPES.CLEAR_CONFIGURATOR_ASYNC:
            return []
        default:
            return state;
    }
}