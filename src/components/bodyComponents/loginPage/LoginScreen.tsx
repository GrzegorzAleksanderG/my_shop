import { FormControl, FormGroup, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import "./LoginScreen.css";

const LoginScreen = () => {

    return (
        <div className="div-login-wrapper">
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="my-email">Email address</InputLabel>
                    <Input id="my-email" aria-describedby="my-email-text" type="email" />
                    <FormHelperText id="my-email-text">Type your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-password">Password</InputLabel>
                    <Input id="my-password" aria-describedby="my-password-text" type="password" />
                    <FormHelperText id="my-password-text">Type your password</FormHelperText>
                </FormControl>
                <Button variant="contained" className="submit-login">Login</Button>
            </FormGroup>
        </div>
    )
}
export default LoginScreen;