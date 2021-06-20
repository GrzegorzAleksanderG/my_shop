import { ACTION_TYPES } from "../actions/actionTypes"

export const registerReducer = (state: any[] = [], action: any) => {
    switch (action.type) {//CRUD... and redux SAGA (in shopinglist)
        case ACTION_TYPES.CREATE_NEW_USER:
            if (typeof state === "object"){
                state = Object.values(state);
            }
            if(state.length === 0 || !state.some(x => x.mail === action.payload.mail)){
                if(action.payload.pass !== action.payload.pass2){
                    alert("Retyped password should be same as password.");
                }else{
                    state = state.concat([action.payload]);
                    alert(`New user ${action.payload.mail} with password ${action.payload.pass} created.`);
                }
            }else{
                alert(`User with mail ${action.payload.mail} already existed.`);
            }
            return { ...state }
        case ACTION_TYPES.UPDATE_EXISTING_USER: //not yet
            return { ...state }
        case ACTION_TYPES.DELETE_EXISTING_USER:
            return { ...state }
        default:
            return state;
    }
}