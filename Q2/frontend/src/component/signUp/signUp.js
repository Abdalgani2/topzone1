import React, { useContext } from 'react';
import "./signUp.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { SignUpContext } from '../../context/signUp';


const SignUp = () => {
    const handleSubmit = (e) => {
        signUpContext.addNewUser();
        e.preventDefault();
    };
    const signUpContext = useContext(SignUpContext);
    return (
        <div className='mainDiv'>
            <div className='secondaryDiv '>
                <h1 className='title'> Sign Up</h1>
                <form className='form'>
                    <Grid container spacing={2}>
                        {/* Email */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                size='small'
                                className='txt'
                                variant="outlined"
                                label="Email"
                                autoFocus
                                onChange={(e) => {
                                    signUpContext.setEmail(e.target.value);
                                }}
                            />
                        </Grid>
                        {/* Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                size='small'
                                className='txt'
                                variant="outlined"
                                label="Name"
                                onChange={(e) => {
                                    signUpContext.setName(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {/* Password */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="password"
                                required
                                size='small'
                                className='txt'
                                variant="outlined"
                                label="Password"
                                onChange={(e) => {
                                    signUpContext.setPassword(e.target.value);
                                }}
                            />
                        </Grid>

                        {/* confirm Password */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="password"
                                required
                                size='small'
                                className='txt'
                                variant="outlined"
                                label="confirm Password"
                                onChange={(e) => {
                                    signUpContext.setConfirmPassword(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* Country */}
                    <Grid alignItems="center"
                        justifyContent="center" container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <select name="Country"
                                style={{ height: "40px" }}
                                className='txt'
                                label="Address"
                                required
                                onChange={(e) => {
                                    signUpContext.setCountry(e.target.value);
                                }}
                            >
                                <option value="">Country</option>
                                <option value="Amman">Amman</option>
                                <option value="Zarqa">Zarqa</option>
                                <option value="Irbid">Irbid</option>
                                <option value="al-Mafraq">al-Mafraq</option>
                                <option value="As-Salt">As-Salt</option>
                                <option value="Mafraq">Madaba</option>
                                <option value="Jerash">Jerash</option>
                                <option value="Ma'an">Ma'an</option>
                            </select>

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {/* checkbox */}
                        <Grid item xs={12} sm={6}>

                            <div className='check'><div><input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                <label for="vehicle3"> I ACCEPT OF ALL</label></div>
                                <div>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                    <label for="vehicle3"> I have a boat</label></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button className='txt' variant="contained" color="primary" onClick={(e) => { handleSubmit(e) }}>
                                sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <p>If you have account <a href="/" >Click here</a>.</p>
                </form>
                {signUpContext.message && (
                    <div className='message'>{signUpContext.message}</div>
                )}

            </div>
        </div>
    );
};

export default SignUp;