import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import {
    Link, NavLink
} from "react-router-dom";
import { useState } from 'react';
import "./MenuBar.css";
import { useSelector } from 'react-redux';
import { StateType, CartReducerType } from '../../reducers/stateReducerTypes';


const MenuBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [inputSearch, setInputSearch] = useState("");

    const open = Boolean(anchorEl);

    const handlePopper = (e: React.BaseSyntheticEvent) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    const loggedUserSelector = useSelector((state: StateType) => state.loginReducer);
    const cartSelector = useSelector((state: StateType) => state.cartReducer.length > 0 ? state.cartReducer.reduce(
        (acc : number, curr : CartReducerType ) => {
            return acc + curr.count;
        }, 0
    ) : 0);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearch(event.target.value);
    }

    return (
        <div>
            <AppBar position="static" style={{ "backgroundColor": '#283747' }}>
                <Toolbar>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ "backgroundColor": "white", "padding": "3px" }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e) }}
                    />
                    <IconButton color="inherit">
                        <NavLink to={`/articles/${inputSearch}`}>
                            <SearchIcon />
                        </NavLink>
                    </IconButton>
                    <IconButton color="inherit" onClick={(e) => handlePopper(e)}>
                        <AccountCircle />
                        <Typography variant="h6" >
                            Account
                        </Typography>
                        <Popper id={"simple-popper"} open={open} anchorEl={anchorEl}>
                            {loggedUserSelector.length === 0 ?
                                <Link to="/login"><div className="poper-item">Log in</div></Link> :
                                <Link to="/logout"><div className="poper-item">Log out</div></Link>
                            }
                            <NavLink to="/registration"><div className="poper-item">Register</div></NavLink>
                        </Popper>
                    </IconButton>
                    <NavLink to="/cart">
                        <IconButton color="inherit">

                            <ShoppingCartIcon />

                            <Typography variant="h6" >
                                Cart {cartSelector > 0 && `(${cartSelector})`}
                            </Typography>
                        </IconButton>
                    </NavLink>
                    <Typography variant="h6" >
                        {loggedUserSelector.length === 0 ? "Welcome" : `Welcome ${loggedUserSelector[0].mail}`}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default MenuBar;