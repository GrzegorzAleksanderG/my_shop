import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const MenuBar = () => {
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
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle />
                        <Typography variant="h6" >
                            Account
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default MenuBar;