import React, { useContext } from 'react';
import "./signIn.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { SignInContext } from '../../context/signIn';



const SignIn = () => {
    const signInContext = useContext(SignInContext);
    const handleSubmit = (e) => {
        console.log('sub func');
        signInContext.login();
        e.preventDefault();
    };
    
    return (
        <div className='bodySignIn'>
            <div className='secondDiv '>
                <h1 className='title'> Sign In</h1>
                <form className='formSignIn' alignItems="center"
                        justifyContent="center">
                            <div>
                    <TextField alignItems="center"
                        justifyContent="center"
                        required
                        size='small'
                        className='txt1'
                        variant="outlined"
                        label="Your Email"
                        autoFocus
                    onChange={(e) => {
                        signInContext.setEmail(e.target.value);
                    }}
                    />
                    </div>
                    
                    {/* Password */}
                    <div>
                    <TextField
                        alignItems="center"
                        justifyContent="center"
                        type="password"
                        required
                        size='small'
                        className='txt1'
                        variant="outlined"
                        label="Your Password"
                    onChange={(e) => {
                        signInContext.setPassword(e.target.value);
                    }}
                    />
                    </div>
                    <Button className='txt1' variant="contained" color="primary" onClick={(e) => { handleSubmit(e) }}>
                        sign In
                    </Button>
                    <p>If you dont have account <a href="/signUp" >Click here</a>.</p>

                </form>
                {signInContext.message && (
                    <div className='message'>{signInContext.message}</div>
                )}

            </div>
        </div>
    );
};

export default SignIn;