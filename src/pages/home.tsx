import React from 'react';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import HomeBanner from '/home.png';
import '../styles/pages/home.scss';

const Home: React.FC = () => {
    return (
        <main>
            <Banner imgSrc={HomeBanner} imgAlt='Panorama mer' />
            <Gallery />
        </main>
    );
};

export default Home;