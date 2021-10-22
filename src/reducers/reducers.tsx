import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { getDataReducer } from './getDataReducer';
import { cartReducer } from './cartReducer';
import { configuratorReducer } from './configuratorReducer'

const rootReducer = combineReducers({
    loginReducer,
    getDataReducer,
    registerReducer,
    cartReducer,
    configuratorReducer
});
export default rootReducer;