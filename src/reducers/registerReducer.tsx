import { ACTION_TYPES } from "../actions/actionTypes"

export const registerReducer = (state: any = [], action: any) => {
    switch (action.type) {//CRUD... and redux SAGA (in shopinglist)
        case ACTION_TYPES.CREATE_NEW_USER:
            !state.contains(action.payload) && state.push(action.payload);
            console.log(state);  
            return { ...state }
        case ACTION_TYPES.UPDATE_EXISTING_USER:
            return { ...state }
        case ACTION_TYPES.DELETE_EXISTING_USER:
            return { ...state }
        default:
            return state;
    }
}