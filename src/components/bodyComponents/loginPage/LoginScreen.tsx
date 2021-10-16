import { FormControl, FormGroup, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import "./LoginScreen.css";
import { logUserAction } from '../../../actions/loginUserActions';
import { useState } from 'react';
import { RegisterReducerType, StateType } from '../../../reducers/stateReducerTypes';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const registeredUsersSelector = useSelector((state: StateType) => state.registerReducer)

    const handleOnClick = () => {
        if (Object.values(registeredUsersSelector).some((x: RegisterReducerType) => x.mail === mail && x.pass === pass)) {
            dispatch(logUserAction({ mail, pass }));
        } else {
            alert("User or password is not valid. Access denied.")
        }
        setMail("");
        setPass("");
    }

    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        console.log(response);
    }

    return (
        <div className="div-registration-wrapper">
            <form>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-email">Email address</InputLabel>
                        <Input id="my-email" aria-describedby="my-email-text" type="email" onChange={(e) => setMail(e.target.value)} value={mail} />
                        <FormHelperText id="my-email-text">Type your email</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-password">Password</InputLabel>
                        <Input id="my-password" aria-describedby="my-password-text" type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
                        <FormHelperText id="my-password-text">Type your password</FormHelperText>
                    </FormControl>
                    <Button variant="contained" type="button" onClick={() => { handleOnClick() }} className="submit-registration">Login</Button>
                    <FacebookLogin
                        appId="562118384400275"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    />
                </FormGroup>
            </form>
        </div>
    )
}

const mapStateToProps = (state: StateType) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = { logUserAction }

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);