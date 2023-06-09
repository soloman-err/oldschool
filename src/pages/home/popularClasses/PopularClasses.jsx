import React from 'react';
import LeftCard from './classCards/LeftCard';
import RightCard from './classCards/RightCard';

const PopularClasses = () => {
  return (
    <section className="flex flex-col justify-between mt-20 w-[90%] mx-auto border-r pr-2">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Popu<span className="border-b-4 border-blue-900">lar Classes</span>
      </h1>
      <div className="space-y-12 md:space-y-5 mt-8">
      <LeftCard/>
      <RightCard/>
      <LeftCard/>
      <RightCard/>
      <LeftCard/>
      <RightCard/>
      </div>

      {/* <div className="mt-10 md:mt-0">
      <h1 className="text-2xl">Lorem ipsum, dolor sit amet consectetur.</h1>
    </div> */}
    </section>
  );
};

export default PopularClasses;
