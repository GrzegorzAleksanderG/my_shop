import { ACTION_TYPES } from "./actionTypes";

export const createNewUserAction = (payload:any) => {
    return {
        type: ACTION_TYPES.CREATE_NEW_USER,
        payload
    }
}

export const updateExistingUserAction = (payload:any) => {
    return {
        type: ACTION_TYPES.UPDATE_EXISTING_USER,
        payload
    }
}

export const deleteExistingUserAction = (payload:any) => {
    return {
        type: ACTION_TYPES.DELETE_EXISTING_USER,
        payload
    }
}