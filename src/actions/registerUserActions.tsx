import { RegisterReducerType } from "../reducers/stateReducerTypes";
import { ACTION_TYPES } from "./actionTypes";

export const createNewUserAction = (payload: RegisterReducerType) => {
    return {
        type: ACTION_TYPES.CREATE_NEW_USER_ASYNC,
        payload
    }
}

export const updateExistingUserAction = (payload: RegisterReducerType) => {
    return {
        type: ACTION_TYPES.UPDATE_EXISTING_USER_ASYNC,
        payload
    }
}

export const deleteExistingUserAction = (payload: RegisterReducerType) => {
    return {
        type: ACTION_TYPES.DELETE_EXISTING_USER_ASYNC,
        payload
    }
}