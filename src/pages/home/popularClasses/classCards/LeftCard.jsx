import React from 'react';
import { Link } from 'react-router-dom';

const LeftCard = () => {
  return (
    <div className="h-80 md:w-[80%] xl:w-[60%] flex flex-col md:flex-row items-center gap-2 md:gap-5 bg-zinc-50 shadow-2xl hover:shadow-lg">
      <div className="order-2 md:w-1/4 space-y-1 mt-8 md:mt-0 p-2">
        <h1 className="text-xl md:text-4xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nam?
        </p>
      </div>

      <div className="w-full md:w-[70%] h-full border border-slate-400 md:pr-3 border-t-0 border-l-0">
        <div className="text-5xl h-full bg-zinc-300 p-1 flex justify-center items-center">
          Card
        </div>
        <Link to={'class-details'}>
          <button className="btn btn-ghost btn-sm rounded-none bg-zinc-900 text-white w-full border-t-0 border-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftCard;
