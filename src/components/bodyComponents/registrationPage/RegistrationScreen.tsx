import { FormControl, FormGroup, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import "./RegistrationScreen.css";
import { createNewUserAction } from '../../../actions/registerUserActions';
import { useState } from 'react';
import { StateType } from '../../../reducers/stateReducerTypes';

const RegistrationScreen = () => {
    const dispatch = useDispatch();
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const handleOnClick = () => {
        dispatch(createNewUserAction({mail, pass, pass2}));
        setMail("");
        setPass("");
        setPass2("");
    }

    return (
        <div className="div-registration-wrapper">
            <form>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-email">Email address</InputLabel>
                        <Input id="my-email" aria-describedby="my-email-text" type="email" onChange={(e) => setMail(e.target.value)} value={mail}/>
                        <FormHelperText id="my-email-text">Type your email</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-password">Password</InputLabel>
                        <Input id="my-password" aria-describedby="my-password-text" type="password" onChange={(e) => setPass(e.target.value)}  value={pass}/>
                        <FormHelperText id="my-password-text">Type your password</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-password2">Retype Password</InputLabel>
                        <Input id="my-password2" aria-describedby="my-password2-text" type="password" onChange={(e) => setPass2(e.target.value)} value={pass2}/>
                        <FormHelperText id="my-password2-text">Retype your password</FormHelperText>
                    </FormControl>
                    <Button variant="contained" type="button" onClick={()=>{handleOnClick()}} className="submit-registration">Register</Button>
                </FormGroup>
            </form>
        </div>
    )
}

const mapStateToProps = (state:StateType) => {
    return {
        registerReducer: state.registerReducer
    }
}

const mapDispatchToProps = {createNewUserAction}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);