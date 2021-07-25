import { ACTION_TYPES, NewUserActionType } from "../actions/actionTypes"
import { RegisterReducerType } from "./stateReducerTypes";

export const registerReducer = (state: RegisterReducerType[] = [], action: NewUserActionType) => {
    switch (action.type) {//CRUD... and redux SAGA (in shopinglist)
        case ACTION_TYPES.CREATE_NEW_USER:
            if(state.length === 0 || !state.some(x => x.mail === action.payload.mail)){
                if(action.payload.pass !== action.payload.pass2){
                    alert("Retyped password should be same as password.");
                }else{
                    alert(`New user ${action.payload.mail} with password ${action.payload.pass} created.`);
                    return state.concat([action.payload]);
                }
            }else{
                alert(`User with mail ${action.payload.mail} already existed.`);
            }
            return state;
        case ACTION_TYPES.UPDATE_EXISTING_USER: //not yet
            return state;
        case ACTION_TYPES.DELETE_EXISTING_USER:
            return state;
        default:
            return state;
    }
}