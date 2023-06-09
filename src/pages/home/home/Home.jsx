import React from 'react';
import Footer from '../../../shared/footer/Footer';
import Banner from '../banner/Banner';
import Featured from '../featured/Featured';
import Hero from '../hero/Hero';
import PopularClasses from '../popularClasses/PopularClasses';
import PopularInstructors from '../popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
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
