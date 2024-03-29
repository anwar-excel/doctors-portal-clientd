import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppointmentHeader;