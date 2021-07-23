import { ACTION_TYPES, LogUserActionType } from "../actions/actionTypes"
import { LoginReducerType } from "./stateReducerTypes";

export const loginReducer = (state: LoginReducerType[] = [], action: LogUserActionType) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_USER:
            if(state.length === 0){
                state = state.concat([action.payload]);
                alert(`User ${action.payload.mail} is logged with password ${action.payload.pass} .`)
            }
            return state;
        case ACTION_TYPES.LOGOUT_USER:
            state = [];
            return state;
        default:
            return state;
    }
}