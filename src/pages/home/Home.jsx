import React from 'react';
import Banner from './banner/Banner';
import PopularClasses from './popularClasses/PopularClasses';

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <StickySidebar/> */}
      {/* <Hero/> */}
      <PopularClasses/>
      {/* <PopularInstructors/> */}
    </div>
  );
};

export default Home;
