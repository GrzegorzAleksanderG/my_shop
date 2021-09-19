import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import { Payment } from '@material-ui/icons';

const BuyButton = () => {
    return (
        <Toolbar>
            <IconButton color="inherit">
                Checkout<NavLink to={`/`}>
                    <Payment />
                </NavLink>
            </IconButton>
        </Toolbar>
    )
}
export default BuyButton;
