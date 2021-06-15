import { FormControl, FormGroup, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import "./RegistrationScreen.css";

const RegistrationScreen = () => {
    return (
        <div className="div-registration-wrapper">
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
                <FormControl>
                    <InputLabel htmlFor="my-password2">Retype Password</InputLabel>
                    <Input id="my-password2" aria-describedby="my-password2-text" type="password" />
                    <FormHelperText id="my-password2-text">Retype your password</FormHelperText>
                </FormControl>
                <Button variant="contained" className="submit-registration">Register</Button>
            </FormGroup>
        </div>
    )
}
export default RegistrationScreen;