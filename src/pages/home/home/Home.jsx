import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../../shared/footer/Footer';
import Banner from '../banner/Banner';
import Featured from '../featured/Featured';
import Hero from '../hero/Hero';
import PopularClasses from '../popularClasses/PopularClasses';
import PopularInstructors from '../popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>oldschool | home</title>
      </Helmet>
      <Banner />
      {/* <StickySidebar/> */}
      <Hero/>
      <PopularClasses />
      <Featured />
      <PopularInstructors/>
      <Footer/>
    </div>
  );
};

export default Home;
