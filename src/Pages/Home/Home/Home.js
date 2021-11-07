import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointment from '../../Appointment/Appointment/Appointment';


const Home = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <Services></Services>
            <Navigation></Navigation>
            <Appointment></Appointment>
            <Link to='/service'>Service</Link>
        </div>
    );
};

export default Home;