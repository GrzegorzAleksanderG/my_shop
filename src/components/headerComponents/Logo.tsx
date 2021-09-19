import logo from "./../../images/logo.jpg";
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to={`/`}>
            <img src={logo} alt="logo" style={{"width":"100%"}}/>
        </NavLink>
    )
}
export default Logo;