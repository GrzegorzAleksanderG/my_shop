import { FormControl, FormGroup, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import "./LoginScreen.css";
import { logUserAction } from '../../../actions/loginUserActions';
import { useState } from 'react';

const LoginScreen = () => {

    const { register, handleSubmit } = useForm(); //not working yet
    const dispatch = useDispatch();
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const registeredUsersSelector = useSelector((state : any) => state.registerReducer)

    const handleOnClick = () => {
        if(Object.values(registeredUsersSelector).some((x : any) => x.mail === mail && x.pass === pass)){
            dispatch(logUserAction({mail, pass}));
        }else{
            alert("User or password is not valid. Access denied.")
        }
        setMail("");
        setPass("");
    }

    return (
        <div className="div-registration-wrapper">
            <form>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-email">Email address</InputLabel>
                        <Input {...register("mail")} id="my-email" aria-describedby="my-email-text" type="email" onChange={(e) => setMail(e.target.value)} value={mail}/>
                        <FormHelperText id="my-email-text">Type your email</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-password">Password</InputLabel>
                        <Input {...register("password")} id="my-password" aria-describedby="my-password-text" type="password" onChange={(e) => setPass(e.target.value)}  value={pass}/>
                        <FormHelperText id="my-password-text">Type your password</FormHelperText>
                    </FormControl>
                    <Button variant="contained" type="button" onClick={()=>{handleOnClick()}} className="submit-registration">Login</Button>
                </FormGroup>
            </form>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = {logUserAction}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);