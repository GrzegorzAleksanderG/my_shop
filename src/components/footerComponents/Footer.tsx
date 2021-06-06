import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () => {
    return (
        <div>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Contact Us" icon={<ContactMailIcon />} />
                <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    )
}
export default Footer;