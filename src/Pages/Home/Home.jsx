import React from 'react';
import Slider from './Slider/Slider';
import HomeAbout from './HomeAbout/HomeAbout';
import Services from './Services/Services';
import PopularProduct from './PopularProduct/PopularProduct';
import HomeContact from './HomeContact/HomeContact';
import Team from './Team/Team';
import CoreFetures from './CoreFetures/CoreFetures';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider/>
            <HomeAbout/>
            <Services/>
            <HomeContact/>
            <PopularProduct/>
            <Team/>
            <CoreFetures/>
            <Testimonial/>
        </div>
    );
};

export default Home;