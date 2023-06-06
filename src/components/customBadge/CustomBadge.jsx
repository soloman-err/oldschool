import React from 'react';

const CustomBadge = () => {
  return (
    <div className='relative'>
      <div
        id="custom-badge"
        className="bottom-10 h-20 md:h-28 lg:h-40 w-[85%] mx-auto bg-slate-400 relative"
      ></div>
        <div className="text-center absolute mx-auto w-full -top-2 xl:top-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Old Bedford school</h1>
        <p className='text-sm w-[80%] text-center mx-auto'> The first Bedfor d area school met in a log building during the early 1860s</p>
      </div>
    </div>
  );
};

export default CustomBadge;
