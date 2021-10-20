import { GoogleLoginButton } from "ts-react-google-login-component";
import { useDispatch } from 'react-redux';
import { logUserAction } from '../../../actions/loginUserActions';
import "./LoginScreen.css";

export const GoogleLogin = () => {

    const dispatch = useDispatch();

    const clientConfig = {
        client_id: 'ggmytestshop'
    }

    const preLoginTracking = () => {
        console.log('Attemp to login with google');
    }

    const errorHandler = (error: string) => {
        console.log(`Google login - error: ${error}`)
    }

    const responseGoogle = (googleUser: gapi.auth2.GoogleUser) => {
        const id_token = googleUser.getAuthResponse(true).id_token;
        const googleId = googleUser.getId();
        //it require confirm owner of domain
        dispatch(logUserAction({ mail: googleId, pass: id_token }));
    }

    return (
        <div className="google-login">
            <GoogleLoginButton
                responseHandler={responseGoogle}
                clientConfig={clientConfig}
                preLogin={preLoginTracking}
                failureHandler={errorHandler}
                renderOptions={{width: 40}}
            />
        </div>
    );

}