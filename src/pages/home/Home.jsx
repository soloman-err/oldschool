import React from 'react';
import Hero from './hero/Hero';
import PopularClasses from './popularClasses/PopularClasses';
import PopularInstructors from './popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <StickySidebar/> */}
      <Hero/>
      <PopularClasses/>
      <PopularInstructors/>
    </div>
  );
};

export default Home;
