import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import { Payment } from '@material-ui/icons';
import { AppBar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { StateType } from '../../../reducers/stateReducerTypes';

const BuyButton = () => {

    const loggedUserSelector = useSelector((state: StateType) => state.loginReducer);

    return (
        <AppBar position="static" style={{ "backgroundColor": 'red' }}>
            <Toolbar>
                <IconButton color="inherit">
                     {loggedUserSelector.length > 0 ? 
                    (<NavLink to={`/summary`}>
                        Continue to Checkout<Payment />
                    </NavLink>) : 
                    (<NavLink to={`/login`}>
                        Login to Continue<Payment />
                    </NavLink>)}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default BuyButton;
