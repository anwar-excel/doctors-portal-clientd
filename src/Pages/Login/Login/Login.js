import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);
    }
    const handleLoginSubmit = e => {
        alert('Successful Login')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Standard"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Login</Button>
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;