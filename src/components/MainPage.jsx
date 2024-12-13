import React from 'react';
import "../css/Mainpage.css";
import MainBanner from './mainpage/MainBanner';
import Banner from './mainpage/Banner';
import Reviews from './mainpage/Reviews';
import KeywordSection from './mainpage/KeywordSection';
import Locations from './mainpage/Locations';

const MainPage = () => {
    return (
        <section className='indexPage'>
            <MainBanner />

            <Banner />

            <Reviews />

            <KeywordSection />

            <Locations />

        </section>
    );
};

export default MainPage;