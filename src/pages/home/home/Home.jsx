import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../banner/Banner';
import Featured from '../featured/Featured';
import Hero from '../hero/Hero';
import MarqueeSlide from '../marquee/Marquee';
import PopularClasses from '../popularClasses/PopularClasses';
import PopularInstructors from '../popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>oldschool | Home</title>
      </Helmet>
      <Banner />
      {/* <StickySidebar/> */}
      <MarqueeSlide />
      <Hero />
      <PopularClasses />
      <Featured />
      <PopularInstructors />
    </div>
  );
};

export default Home;
