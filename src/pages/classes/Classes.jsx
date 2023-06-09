import React from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
  return (
    <section className='w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto mt-5 md:mt-10'>
      <Helmet>
        <title>oldschool | Classes</title>
      </Helmet>
      <div>
        <div className="h-80 w-full flex flex-col md:flex-row items-center gap-2 md:gap-5 bg-slate-200">
          <div className="order-2 md:w-2/4 space-y-1 mt-8 md:mt-0 p-2">
            <h1 className="text-xl md:text-4xl font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              nam?
            </p>
          </div>

          <div className="w-full md:w-[50%] h-full border border-slate-500 md:pr-3 border-t-0 border-l-0">
            <div className="text-3xl h-full bg-slate-400 p-1 flex justify-center items-center">
              image
            </div>
            <button className="btn btn-ghost btn-sm rounded-none bg-slate-800 text-white w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
