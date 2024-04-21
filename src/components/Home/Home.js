import React from 'react';
import HomeHero from './HomeHero';
import HomeFeatured from './HomeFeatured';
import Navbar from '../Navbar/Nabvar';
import HomeCommunities from './HomeCommunities';
import HomeAboutUs from './HomeAboutUs';
import './Home.css'; // Import the CSS file
import HomePools from './HomePools';
import HomePlans from './HomePlans';
import Footer from '../Footer/Footer';

import NeighborhoodMap from '../NeighborhoodMap/NeighborhoodMap';


const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeHero />
            <HomeFeatured />
            <HomeAboutUs />
            <HomeCommunities />
            <HomePools />
            <NeighborhoodMap />
            <HomePlans />
            <Footer />
        </div>

    );
};

export default Home;
