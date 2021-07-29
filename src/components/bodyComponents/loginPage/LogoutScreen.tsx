import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { logoutUserAction } from '../../../actions/loginUserActions';
import { StateType } from "../../../reducers/stateReducerTypes";

const LogoutScreen = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logoutUserAction({mail:"", pass:""}));
    }, [dispatch]);

    return(
        <div style={{"color":"white"}}>
            You have been logged out from our shop application.
        </div>
    )
}
const mapStateToProps = (state:StateType) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = {logoutUserAction}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);