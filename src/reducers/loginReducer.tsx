import { ACTION_TYPES, LogUserActionType } from "../actions/actionTypes"
import { LoginReducerType } from "./stateReducerTypes";

export const loginReducer = (state: LoginReducerType[] = [], action: LogUserActionType) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_USER_ASYNC:
            if (state.length === 0) {
                alert(`User ${action.payload.mail} is logged with password ${action.payload.pass} .`);
                return state.concat([action.payload]);
            } else {
                return state;
            }
        case ACTION_TYPES.LOGOUT_USER_ASYNC:
            return [];
        default:
            return state;
    }
}