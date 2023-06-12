import React from 'react';

const PageTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center my-5 w-60 md:w-80 mx-auto">
      <h2 className='text-lg xl:text-2xl uppercase font-bold bg-zinc-50 text-'>{heading}</h2>
      <p className='opacity-80'> -{subHeading}- </p>
    </div>
  );
};

export default PageTitle;
