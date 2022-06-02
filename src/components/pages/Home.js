import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards.js';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;