import React from 'react';

const RightCard = () => {
  return (
    <div className="h-80 flex flex-col md:flex-row justify-end items-center gap-2 md:gap-5 bg-slate-50">
      <div className="md:w-2/4 order-2 md:order-1 text-end space-y-2 mt-10 md:mt-0">
        <h1 className="text-xl md:text-4xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nam?
        </p>
      </div>
      <div className="w-full md:w-[40%] md:order-2 h-full border border-slate-400 md:pl-3 border-t-0 border-r-0">
        <div className="text-5xl h-full bg-slate-400 p-1 flex justify-center items-center">
          Card
        </div>
        <button className="btn btn-ghost btn-sm rounded-none bg-slate-800 text-white w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RightCard;
