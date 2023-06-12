import React from 'react';
import InstructorCard from '../../../shared/instructors/InstructorCard';

const PopularInstructors = () => {
  return (
    <div className="mt-8 mb-10 px-5 w-11/12 mx-auto">
       <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our Top <span className="border-b-4 border-blue-900">Instructors</span>
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-50 mt-5">
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>
    </div>
  );
};

export default PopularInstructors;
