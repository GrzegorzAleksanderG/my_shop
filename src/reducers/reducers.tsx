import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { testReducer } from './testReducer';
import { getDataReducer } from './getDataReducer';

const rootReducer = combineReducers({
    loginReducer,
    getDataReducer,
    registerReducer,
    testReducer
});
export default rootReducer;