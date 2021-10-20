import ReactFacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { useDispatch } from 'react-redux';
import { logUserAction } from '../../../actions/loginUserActions';

export const FBLogin = () => {

    const dispatch = useDispatch();

    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        if(response.email){
            dispatch(logUserAction({ mail: response.email, pass: response.userID }));
            alert("FB login succeed");
        }else{
            alert("FB login failed");
        }
    }

    return (
        <ReactFacebookLogin
            appId="328685625726731" //now it cannot work because FB blocked this APP; it exists only on github not on real server
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"
            buttonStyle={{"width":"100%"}}
        />
    )
}