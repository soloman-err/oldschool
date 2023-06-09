import React from 'react';
import Card from '../../../components/cards/Card';

const PopularInstructors = () => {
  return (
    <div className="mt-8 px-5 w-11/12 mx-auto">
       <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our Top <span className="border-b-4 border-blue-900">Instructors</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-50 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default PopularInstructors;
