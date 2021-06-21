import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { logoutUserAction } from '../../../actions/loginUserActions';

const LogoutScreen = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logoutUserAction({}));
    }, [dispatch]);

    return(
        <div style={{"color":"white"}}>
            You have been logged out from our shop application.
        </div>
    )
}
const mapStateToProps = (state:any) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = {logoutUserAction}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);