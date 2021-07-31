import { cartReducer } from '../cartReducer';
import { addToCartAction } from '../../actions/cartActions';
import { registerReducer } from '../registerReducer';
import { createNewUserAction } from '../../actions/registerUserActions';
import { loginReducer } from '../loginReducer';
import { logUserAction, logoutUserAction } from '../../actions/loginUserActions';

describe("testing reducers", () => {
    test("should add article to cart", () => {
        expect(cartReducer([], addToCartAction({
            id: 1,
            name : "test name",
            description : "test desc",
            category : "test category",
            price : "test price",
            count: 1
        }))).toEqual([{
            id: 1,
            name : "test name",
            description : "test desc",
            category : "test category",
            price : "test price",
            count: 1
        }]);
    });

    test("should register new user", () => {
        expect(registerReducer([], createNewUserAction({
            mail:"111@gmail.com", pass:"111", pass2:"111"
        }))).toEqual([{
            mail:"111@gmail.com", pass:"111", pass2:"111"
        }]);
    });

    test("should login user", () => {
        expect(loginReducer([], logUserAction({
            mail:"111@gmail.com", pass:"111"
        }))).toEqual([{
            mail:"111@gmail.com", pass:"111"
        }]);
    });

    test("should logout user", () => {
        expect(loginReducer([], logoutUserAction({
            mail:"111@gmail.com", pass:"111"
        }))).toEqual([]);
    });

    
});