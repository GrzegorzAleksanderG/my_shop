import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { testReducer } from './testReducer';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    testReducer
});
export default rootReducer;