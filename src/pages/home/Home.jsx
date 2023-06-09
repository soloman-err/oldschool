import React from 'react';
import Banner from './banner/Banner';
import Featured from './featured/Featured';
import PopularClasses from './popularClasses/PopularClasses';
// import PopularInstructors from './popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <StickySidebar/> */}
      {/* <Hero/> */}
      <PopularClasses />
      {/* <PopularInstructors/> */}
      <Featured />
    </div>
  );
};

export default Home;
