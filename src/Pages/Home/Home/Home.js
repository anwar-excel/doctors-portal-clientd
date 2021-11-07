import React from 'react';

import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;