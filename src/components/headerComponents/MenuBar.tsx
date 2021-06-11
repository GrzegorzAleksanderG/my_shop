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
    Link
} from "react-router-dom";
import { useState } from 'react';
import "./MenuBar.css";


const MenuBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handlePopper = (e: any) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    return (
        <div>
            <AppBar position="static" style={{ "backgroundColor": '#283747' }}>
                <Toolbar>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ "backgroundColor": "white", "padding": "3px" }}
                    />
                    <IconButton color="inherit">
                        <Link to="/articles">
                            <SearchIcon />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit" onClick={(e) => handlePopper(e)}>
                        <AccountCircle />
                        <Typography variant="h6" >
                            Account
                        </Typography>
                        <Popper id={"simple-popper"} open={open} anchorEl={anchorEl}>
                            <Link to="/login"><div className="poper-item">Log in</div></Link>
                            <Link to="/registration"><div className="poper-item">Register</div></Link>
                        </Popper>
                    </IconButton>
                    <Link to="/cart">
                        <IconButton color="inherit">

                            <ShoppingCartIcon />

                            <Typography variant="h6" >
                                Cart
                            </Typography>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default MenuBar;