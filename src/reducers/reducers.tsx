import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { testReducer } from './testReducer';
import { getDataReducer } from './getDataReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    loginReducer,
    getDataReducer,
    registerReducer,
    cartReducer,
    testReducer
});
export default rootReducer;