import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import { PlayArrow } from '@material-ui/icons';
import { AppBar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { CartReducerType, StateType } from '../../../reducers/stateReducerTypes';

const BuyButton = () => {

    const loggedUserSelector = useSelector((state: StateType) => state.loginReducer);
    const sumOfCostsSelector = useSelector((state: StateType) => state.cartReducer.map((x: CartReducerType) => {
        return Number.parseFloat(x.price.slice(1)) * x.count
    }).reduce((x: number, y: number) => { return x + y }));

    return (
        <AppBar position="static" style={{ "backgroundColor": 'red' }}>
            <Toolbar>
                <IconButton color="inherit">
                     {loggedUserSelector.length > 0 ? 
                    (<NavLink to={`/summary`}>
                        Continue to Checkout - Total costs: ${sumOfCostsSelector}<PlayArrow />
                    </NavLink>) : 
                    (<NavLink to={`/login`}>
                        Login to Continue - Total costs: ${sumOfCostsSelector}<PlayArrow />
                    </NavLink>)}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default BuyButton;
