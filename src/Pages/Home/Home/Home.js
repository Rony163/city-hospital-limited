import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-5 text-info text-center ms-5">Our Services</h1>
            <Services></Services>
            <Advantages></Advantages>
            <Contact></Contact>
        </div>
    );
};

export default Home;